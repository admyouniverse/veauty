<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicoUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servico_usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('servico_id')->unsigned();
            $table->foreign('servico_id')->references('id')->on('servicos');
            $table->integer('user_id')->nullable()->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('carrinho_id')->unsigned();
            $table->foreign('carrinho_id')->references('id')->on('carrinhos');
            $table->integer('quantidade')->default(1);
            $table->text('pagamento');
            $table->integer('salao_id')->unsigned();
            $table->foreign('salao_id')->references('id')->on('salaos');
            $table->string('pagseguro')->nullable();
            $table->decimal('subtotal',8,2);
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('servico_usuarios');
    }
}
