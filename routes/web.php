<?php

use Illuminate\Http\Request;
use App\Estado;
use App\Servico;
use App\Salao;
use App\Cidade;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Portal')->group(function() {
  Route::get('/', 'HomeController@index')->name('home');
  Route::post('/buscar', 'HomeController@buscar');
  
  Route::get('/carrinho/create', 'CarrinhoController@create');
  Route::get('/carrinho/adiciona/{id}', 'CarrinhoController@adicionaServico');
  Route::get('/carrinho/exists', 'CarrinhoController@temCarrinho');
  Route::get('/carrinho', 'CarrinhoController@show')->name('carrinho');
  Route::get('/carrinho/remover/{id}', 'CarrinhoController@removeProduto');
  Route::get('/carrinho/pagar', 'CarrinhoController@checkout')->name('pagar');
  Route::post('/carrinho/pagar', 'CarrinhoController@pagseguro');
});

Route::group(['prefix' => 'admin'], function () {
  Route::get('/login', 'AdminAuth\LoginController@showLoginForm')->name('login');
  Route::post('/login', 'AdminAuth\LoginController@login');
  Route::post('/logout', 'AdminAuth\LoginController@logout')->name('logout');

  Route::get('/register', 'AdminAuth\RegisterController@showRegistrationForm')->name('register');
  Route::post('/register', 'AdminAuth\RegisterController@register');

  Route::post('/password/email', 'AdminAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
  Route::post('/password/reset', 'AdminAuth\ResetPasswordController@reset')->name('password.email');
  Route::get('/password/reset', 'AdminAuth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
  Route::get('/password/reset/{token}', 'AdminAuth\ResetPasswordController@showResetForm');
});

Route::group(['prefix' => 'empresa'], function () {
  Route::get('/login', 'EmpresaAuth\LoginController@showLoginForm')->name('login');
  Route::post('/login', 'EmpresaAuth\LoginController@login');
  Route::post('/logout', 'EmpresaAuth\LoginController@logout')->name('logout');

  Route::get('/register', 'EmpresaAuth\RegisterController@showRegistrationForm')->name('register');
  Route::post('/register', 'EmpresaAuth\RegisterController@register');

  Route::post('/password/email', 'EmpresaAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
  Route::post('/password/reset', 'EmpresaAuth\ResetPasswordController@reset')->name('password.email');
  Route::get('/password/reset', 'EmpresaAuth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
  Route::get('/password/reset/{token}', 'EmpresaAuth\ResetPasswordController@showResetForm');
});

Route::group(['prefix' => 'salao'], function () {
  Route::get('/login', 'SalaoAuth\LoginController@showLoginForm')->name('login');
  Route::post('/login', 'SalaoAuth\LoginController@login');
  Route::post('/logout', 'SalaoAuth\LoginController@logout')->name('logout');

  Route::get('/register', 'SalaoAuth\RegisterController@showRegistrationForm')->name('register');
  Route::post('/register', 'SalaoAuth\RegisterController@register');

  Route::post('/password/email', 'SalaoAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
  Route::post('/password/reset', 'SalaoAuth\ResetPasswordController@reset')->name('password.email');
  Route::get('/password/reset', 'SalaoAuth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
  Route::get('/password/reset/{token}', 'SalaoAuth\ResetPasswordController@showResetForm');
});






// REQUISIÇÕES PARA AJAX
Route::get('/listServicos', function(Request $request) {

  $servico = Servico::where('nome','like', '%'.$request->q.'%')->limit(25)->get();
  return ($servico);
    //return json_encode(Servico::all());
});

Route::get('/listSaloes', function(Request $request) {
  $saloes = Salao::where('nome', 'like', '%' . $request->q . '%')->limit(25)->get();
  \Log::debug($saloes);
  return $saloes;
});

//Consulta estados-cidade
Route::get('/estado/{id}', function($id) {
  return json_encode(Estado::find($id)->cidades);
});

//Consulta cidades
Route::get('/listCidades', function(Request $request) {

  $cidade = Cidade::where('nome','like', '%'.$request->q.'%')->with('estado')->limit(25)->get();
  return ($cidade);
    //return json_encode(Servico::all());
});

//Pega cidade
Route::post('/getCidade', function(Request $request) {

  $cidade = Cidade::where('nome','like', '%'.$request->nome.'%')->whereHas('estado', function ($query) use ($request)
  {
    $query->where('sigla', $request->sigla);
  })->first();

  return ($cidade);
    //return json_encode(Servico::all());
});

