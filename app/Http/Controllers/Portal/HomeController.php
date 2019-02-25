<?php

namespace App\Http\Controllers\Portal;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Salao;
use App\Plano;
use App\Cidade;
use App\Estado;
use danielme85\Geoip2\Facade\Reader;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ip = \Request::ip();
        $reader = Reader::connect();

        $position = $reader->city('186.223.225.188');
        $lat = $position->location->latitude;
        $lng = $position->location->longitude;

        $salao = Salao::with('servicos')->with('cidade')->withCount('servicos')->orderBy(\DB::raw("3959 * acos( cos( radians({$lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-{$lng}) ) + sin( radians({$lat}) ) * sin(radians(latitude)) )"), 'DESC')->get();

        $cidade = Cidade::where('nome','like', '%'.$position->city->name.'%')->whereHas('estado', function ($query) use ($position)
        {
            $query->where('sigla', $position->mostSpecificSubdivision->isoCode);
        })->first();

        return view('portal.index',compact('salao','cidade'));
    }


    //Busca de salões
    public function buscar(Request $request ) {

        $circle_radius = 3959;
        $max_distance = 20;

        \Log::debug($request->location['lat']);
        $lat = $request->location['lat'];
        $lng = $request->location['lng'];


        if(!$request->cidades_id){
            $cidade = Cidade::where('nome', 'LIKE' , '%'.$request->cidade.'%')->whereHas('estado', function ($query) use ($request)
            {
                $query->where('sigla', $request->estado);
            })->first();
        }else{
            $cidade = $request->cidade_id;
        }
        \Log::debug($request->servico);
        if($request->servico != ''){
            $results = Salao::where('cidade_id',$cidade->id)->where('nome', 'LIKE' , '%'.$request->nome.'%')->where('bairro','LIKE' , '%'.$request->bairro.'%')->whereHas('servicos', function ($query) use ($request)
            {
                $query->where('servico_id', $request->servico);
            })->with('servicos')->with('cidade')->withCount('servicos')->orderBy(\DB::raw("3959 * acos( cos( radians({$lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-{$lng}) ) + sin( radians({$lat}) ) * sin(radians(latitude)) )"), 'DESC')->get();
            \Log::debug($results);
            if($results->count() <= 0){
                $results = Salao::where('cidade_id',$cidade->id)->where('nome', 'LIKE' , '%'.$request->nome.'%')->where('bairro','LIKE' , '%'.$request->bairro.'%')->with('servicos')->with('cidade')->withCount('servicos')->orderBy(\DB::raw("3959 * acos( cos( radians({$lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-{$lng}) ) + sin( radians({$lat}) ) * sin(radians(latitude)) )"), 'DESC')->get();
                \Log::debug('entrou if 2');

            }
        }else{
            \Log::debug('entrou else 1');
            $results = Salao::where('cidade_id',$cidade->id)->where('nome', 'LIKE' , '%'.$request->nome.'%')->where('bairro','LIKE' , '%'.$request->bairro.'%')->with('servicos')->with('cidade')->withCount('servicos')->orderBy(\DB::raw("3959 * acos( cos( radians({$lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-{$lng}) ) + sin( radians({$lat}) ) * sin(radians(latitude)) )"), 'DESC')->get();
        }



        return json_encode($results);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
