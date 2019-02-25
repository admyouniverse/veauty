<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
	public $guarded = [];
	
    public function salao()
	{
	   return $this->belongsToMany('App\Salao', 'salao_servico')
	                    ->withPivot('valor','descricao','id')
	                    ->withTimestamps();
	}
}
