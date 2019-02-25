<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;
use App\Salao;
use App\Servico;
use App\SalaoServico;

class CreateSaloesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('pt_BR');

        $limit = 21;

         DB::table('servicos')->insert([
            'nome' => 'Corte de Cabelo',
            'descricao' => $faker->text($maxNbChars = 10)
         ]);

         DB::table('servicos')->insert([
            'nome' => 'Escova',
            'descricao' => $faker->text($maxNbChars = 10)
         ]);

         DB::table('servicos')->insert([
            'nome' => 'Manicure',
            'descricao' => $faker->text($maxNbChars = 10)
         ]);

         DB::table('servicos')->insert([
            'nome' => 'Hidratação',
            'descricao' => $faker->text($maxNbChars = 10)
         ]);

         DB::table('servicos')->insert([
            'nome' => 'Coloração',
            'descricao' => $faker->text($maxNbChars = 10)
         ]);

        for ($i = 0; $i < $limit; $i++) {
            $salao = DB::table('salaos')->insert([ //,
                'nome' => 'Salão ' . $faker->firstName,
                'email' => 'salao'.$i.'@email.com',
                'password' => Hash::make('123456'),
                'telefone' => $faker->phoneNumber,
                'descricao' => $faker->text($maxNbChars = 70), 
                'rua' => $faker->streetName,
                'bairro' => $faker->state,
                'numero' => $faker->buildingNumber,
                'complemento' => '',
    			'cnpj' => '',
    			'cidade_id' => 4893,
    			'cep' => $faker->postcode,
    			'latitude' => $faker->latitude($min = -29.678, $max = -29.690),
    			'longitude' => $faker->longitude($min = -51.131, $max = -51.137),
    			'imagem' => $faker->image($dir = 'public/storage/salao', $width = 800, $height = 600, 'fashion', false),
    			 
            ]);

        }

        $saloes = Salao::all();

        foreach($saloes as $salao) {
             $servicos = Servico::inRandomOrder()->limit(3)->get();

             foreach($servicos as $servico) {
                DB::table('salao_servico')->insert(['salao_id' => $salao->id, 'servico_id' => $servico->id, 'descricao' => $faker->text($maxNbChars = 10), 'valor' => $faker->randomFloat($nbMaxDecimals = 2, $min = 10, $max = 110)]);
             }

        }
    }
}
