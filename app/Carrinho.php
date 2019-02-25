<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carrinho extends Model
{	
	protected $guarded = [];

	protected $appends = ['total', 'total_sem_formato'];

	public function servicos() {
		return $this->hasMany('App\CarrinhoServico', 'carrinho_id');
	}

	public function getTotalAttribute() {
		$total = 0;

		foreach($this->servicos as $produto) {

			
			$total = $total + $produto->subtotal;

		}

		return number_format($total, 2, ',', '.');
	}

	public function getTotalSemFormatoAttribute() {
		$total = 0;

		foreach($this->servicos as $produto) {

			
			$total = $total + $produto->subtotal;

		}

		return $total;
	}
}
