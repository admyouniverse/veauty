<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('descricao')->nullable();
            $table->boolean('aceito')->default(true);
            $table->datetime('date')->nullable();            
            $table->date('data')->nullable();
            $table->time('horario')->nullable();
            $table->integer('servico_id')->unsigned();
            $table->foreign('servico_id')->references('id')->on('salao_servico');
            $table->integer('salao_id')->unsigned();
            $table->foreign('salao_id')->references('id')->on('salaos');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('profissional_id')->unsigned()->nullable();
            $table->foreign('profissional_id')->references('id')->on('profissionals');  
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
        Schema::dropIfExists('agendas');
    }
}
