<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicoUsuario extends Model
{
	protected $guarded = [];

    protected $with = ['cliente'];
    
	public function salao() {
        return $this->belongsTo('App\Salao', 'salao_id');
    }

    public function detalhes() {
        return $this->belongsTo('App\Servico', 'servico_id');
    }

    public function cliente() {
    	return $this->belongsTo('App\UserCliente', 'user_id');
    }
}
