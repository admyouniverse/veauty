<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mensagem extends Model
{
    protected $guarded = [];

    protected $appends = ['avatar'];

    public function salao() {
        return $this->belongsTo('App\Salao', 'salao_id');
    }

    public function getAvatarAttribute() {
    	if($this->tipo == 2) {
    		return $this->salao->avatar;
    	} else {
    		return null;
    	}
    }

     public function usuario() {
    	return $this->belongsTo('App\User', 'user_id');
    }
}
