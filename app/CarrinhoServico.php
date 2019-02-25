<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarrinhoServico extends Model
{
    protected $table = 'carrinho_servico';

    protected $guarded = [];

    public function salao() {
    	return $this->belongsTo('App\Salao', 'salao_id');
    }

    public function detalhes() {
    	return $this->belongsTo('App\Servico', 'servico_id');
    }
}
