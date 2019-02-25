<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatPivotServicoSalao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('salao_servico', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('salao_id')->unsigned();
        $table->foreign('salao_id')->references('id')->on('salaos');
        $table->integer('servico_id')->unsigned();
        $table->foreign('servico_id')->references('id')->on('servicos');
        $table->string('descricao')->nullable();
        $table->decimal('valor')->nullable();             
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
        Schema::dropIfExists('salao_servico');
    }
}
