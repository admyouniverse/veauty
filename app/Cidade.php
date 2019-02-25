<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{
    protected $fillable = ['nome', 'estado_id', 'ibge'];

    protected $with = ['estado'];

    public function estado() {
      return $this->belongsTo('App\Estado');
    }

    public function cidade(){
        return $this->hasMany('App\Cidade');
    }
}
