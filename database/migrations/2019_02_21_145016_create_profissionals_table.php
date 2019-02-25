<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfissionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profissionals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome')->nullable();
            $table->boolean('ativo')->default(true);
            $table->integer('servico_id')->unsigned();
            $table->foreign('servico_id')->references('id')->on('salao_servico');
            $table->integer('salao_id')->unsigned();
            $table->foreign('salao_id')->references('id')->on('salaos');
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
        Schema::dropIfExists('profissionals');
    }
}
