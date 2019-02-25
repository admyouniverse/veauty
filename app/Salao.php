<?php

namespace App;

use App\Notifications\SalaoResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Salao extends Authenticatable
{
    use Notifiable;

    protected $guarded = [];

    protected $appends = ['avatar'];
    
    protected $hidden = ['password', 'remember_token'];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new SalaoResetPassword($token));
    }

    public function servicos()
    {
        return $this->belongsToMany('App\Servico', 'salao_servico')->withPivot('valor','descricao','id')->withTimestamps();
    }

    public function agenda() {
        return $this->belongsTo('App\Agenda');
    }

    public function profissionais() {
        return $this->hasMany('App\Profissionais');
    }

    public function getAvatarAttribute() {
        return asset($this->imagem);
    }

        public function cidade() {
        return $this->belongsTo('App\Cidade');
    }
}
