<?php

namespace App\Http\Controllers\Portal;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Salao;
use App\Plano;
use App\Servico;
use App\Cliente;
use App\Carrinho;
use PagSeguro; //Utilize a Facade
use App\ServicoUsuario;
use Auth;
use Illuminate\Support\Facades\Session;
use DB;

class CarrinhoController extends Controller
{

   public function create()
   {
      if(Session::has('carrinho')){
        $carrinho = Session::get('carrinho'); 
    } else {

        if(Auth::guard('web')->check()){
           $carrinho = Carrinho::create(['user_id' => Auth::guard('web')->user()->id]);
       } else {
        $carrinho = Carrinho::create(['user_id' => null]);
    }    
    Session::put('carrinho', $carrinho);
}

return $carrinho;

}   

public function adicionaServico($id) {
  $carrinho = $this->create();

  \Log::debug($id);
  $servico = DB::table('salao_servico')->where('id', $id)->first();
  $carrinho->servicos()->create(['servico_id' => $servico->servico_id, 'subtotal' => $servico->valor, 'quantidade' => 1, 'salao_id' => $servico->salao_id]);

  return Carrinho::where('id', Session::get('carrinho')->id)->with('servicos')->with('servicos.salao')->with('servicos.detalhes')->first();
}

public function temCarrinho() {
  if (Session::has('carrinho')) {
    return Carrinho::where('id', Session::get('carrinho')->id)->with('servicos')->with('servicos.salao')->with('servicos.detalhes')->first();
} else {
    return response()->json(['vazio' => true]);
}
}

public function show(){

  return view('portal.cart');
}

public function removeProduto($id) {
  $carrinho = $this->create();
  $carrinho->servicos()->where('id', $id)->delete();

  return Carrinho::where('id', Session::get('carrinho')->id)->with('servicos')->with('servicos.salao')->with('servicos.detalhes')->first();
}

public function checkout() {

  if(Auth::guard('web')->check()){
    return view('portal.pagar');
} else {
 return redirect()->to(route('cliente.login'));
}
}

public function finalizar(Request $request) {
   $carrinho = $this->create();
   $carrinho = Carrinho::find($carrinho->id);

   foreach($carrinho->servicos as $servico) {
      Auth::guard('web')->user()->servicos()->create(['servico_id' => $servico->servico_id, 'salao_id' => $servico->salao_id, 'carrinho_id' => $servico->carrinho_id, 'subtotal' => $servico->subtotal, 'pagamento' => 'cartao', 'quantidade' => $servico->quantidade]);
  }

  $id = $carrinho->id;

  Session::forget('carrinho');

  return redirect()->to(route('portal.agendar', $id));
}

public function agendar($id) {
  Session::forget('carrinho');
  $servicos = ServicoUsuario::where('carrinho_id', $id)->get(); 
  return view('portal.agendar', compact('servicos'));
}


public function pagseguro(Request $request) {

  $carrinho = $this->create();
  $carrinho = Carrinho::find($carrinho->id);

  // dd($request->all());
  if($request->forma == 1) {

    $pagseguro = PagSeguro::setReference(uniqid())
    ->setSenderInfo([
  'senderName' => 'Vitor Hugo Lopes', //Deve conter nome e sobrenome
  'senderPhone' => '(32) 1324-1421', //Código de área enviado junto com o telefone
  'senderEmail' => 'vitor@email.com',
  'senderHash' => $request->senderHash,
  'senderCPF' => '858.097.785-18' //Ou CNPJ se for Pessoa Júridica
])
    ->setCreditCardHolder([
      'creditCardHolderBirthDate' => '14/02/1995',
  ])
    ->setShippingAddress([
      'shippingAddressStreet' => 'Rua 25 de Março',
      'shippingAddressNumber' => '63',
      'shippingAddressDistrict' => 'Rio Branco',
      'shippingAddressPostalCode' => '93510020',
      'shippingAddressCity' => 'Novo Hamburgo',
      'shippingAddressState' => 'RS'
  ])
    ->setItems([
      [
        'itemId' => 'BeautyPass',
        'itemDescription' => 'Itens no BeautyPass',
    'itemAmount' => $carrinho->total_sem_formato, //Valor unitário
    'itemQuantity' => '1', // Quantidade de itens
]
])
    ->send([
      'paymentMethod' => 'creditCard',
      'creditCardToken' => $request->cardToken,
      'installmentQuantity' => '1',
      'installmentValue' => $carrinho->total_sem_formato,
  ]);


} else {

    $pagseguro = PagSeguro::setReference(uniqid())
    ->setSenderInfo([
  'senderName' => 'Vitor Hugo Lopes', //Deve conter nome e sobrenome
  'senderPhone' => '(32) 1324-1421', //Código de área enviado junto com o telefone
  'senderEmail' => 'vitor@email.com',
  'senderHash' => $request->senderHash,
  'senderCPF' => '858.097.785-18' //Ou CNPJ se for Pessoa Júridica
])
    ->setShippingAddress([
      'shippingAddressStreet' => 'Rua 25 de Março',
      'shippingAddressNumber' => '63',
      'shippingAddressDistrict' => 'Rio Branco',
      'shippingAddressPostalCode' => '93510020',
      'shippingAddressCity' => 'Novo Hamburgo',
      'shippingAddressState' => 'RS'
  ])
    ->setItems([
      [
        'itemId' => 'BeautyPass',
        'itemDescription' => 'Itens no BeautyPass',
    'itemAmount' => $carrinho->total_sem_formato, //Valor unitário
    'itemQuantity' => '1', // Quantidade de itens
]
])
    ->send([
      'paymentMethod' => 'boleto'
  ]);

} 

dd($pagseguro);
foreach($carrinho->servicos as $servico) {
  Auth::guard('web')->user()->servicos()->create(['servico_id' => $servico->servico_id, 'salao_id' => $servico->salao_id, 'carrinho_id' => $servico->carrinho_id, 'subtotal' => $servico->subtotal, 'pagamento' => 'cartao', 'quantidade' => $servico->quantidade, 'status' => $pagseguro->status, 'pagseguro' => $pagseguro->reference]);
}

$id = $carrinho->id;

Session::forget('carrinho');

return redirect()->to(route('portal.agendar', $id));

// dd($request->all());
}
}
