<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salaos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome')->nullable(); 
            $table->string('email')->unique()->nullable();     
            $table->string('imagem')->nullable();      
            $table->string('razao_social')->nullable();
            $table->string('cnpj')->nullable();
            $table->text('descricao')->nullable();
            $table->string('telefone')->nullable();
            $table->string('cep')->nullable();
            $table->string('rua')->nullable();
            $table->string('bairro')->nullable();
            $table->string('numero')->nullable();
            $table->string('complemento')->nullable();            
            $table->integer('cidade_id')->unsigned();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->foreign('cidade_id')->references('id')->on('cidades');
            $table->string('password');
            $table->rememberToken();
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
        Schema::drop('salaos');
    }
}
