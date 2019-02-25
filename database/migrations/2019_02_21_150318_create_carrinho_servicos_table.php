<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarrinhoServicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carrinho_servico', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('servico_id')->unsigned();
            $table->foreign('servico_id')->references('id')->on('servicos');
            $table->integer('carrinho_id')->unsigned();
            $table->foreign('carrinho_id')->references('id')->on('carrinhos');
            $table->integer('salao_id')->unsigned();
            $table->foreign('salao_id')->references('id')->on('salaos');
            $table->integer('quantidade')->default(1);
            $table->decimal('subtotal',8,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carrinho_servico');
    }
}
