 
<template>
	<div class="empresa-componente">
		<BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
		
		<div class="row">
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':empresa.nome != null}" for="nome">Nome</label>
					<input type="text" name="nome" v-model="empresa.nome" id="nome" autocomplete="off" class="form-control form-float" />
				</div>
			</div>
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':empresa.cnpj != null && empresa.cnpj != '' && empresa.cnpj}" for="cnpj">CNPJ da empresa</label>
					<input type="text" value="" id="empresa_cnpj" autocomplete="off" name="cnpj" v-model="empresa.cnpj" v-mask="'##.###.###/####-##'" class="form-control form-float" />
				</div>
			</div>

			<div class="col-md-5 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':empresa.telefone != null && empresa.telefone != ''}" for="telefone">Telefone</label>
					<input type="text" name="telefone" v-model="empresa.telefone" v-mask="'(##) #####-####'" class="form-control form-float" autocomplete="off" value="">
				</div>
			</div>
			<div class="col-md-7 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':empresa.email != null && empresa.email != ''}" for="email">Email</label>
					<input type="email" name="email" value="" id="empresa_email" v-model="empresa.email"  class="form-control form-float" autocomplete="off">
				</div>
			</div>
			<div class="col-md-4 col-12 pad-10">
				<div class="form-group" :class="{'error':erro}">
					<label class="" :class="{'label-completo':empresa.cep != null && empresa.cep != '' && empresa.cep}" for="cep">CEP</label>
					<input type="text" value="" @blur="buscaCEP" id="empresa_cep" name="cep" v-model="empresa.cep" v-mask="'##.###-###'" class="form-control form-float" autocomplete="off" />
					<div class="form-control-feedback" v-if="erro">CEP inválido</div>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class="" for="estado">Estado</label>
					<select class="form-control form-float" @change="popularCidades" v-model="estado" id="empresa_estado" name="estado">
						<option value="x" disabled></option>
						<option :value="estado.id" v-for="estado in estados">{{ estado.nome }}</option>
					</select>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class="" for="cidade">Cidade</label>
					<select class="form-control form-float" v-model="cidade" id="empresa_cidade" name="cidade">
						<option value="x" v-if="!estado" disabled>Selecione primeiro um estado</option>
						<option :value="cidade.id" v-for="cidade in cidades">{{ cidade.nome }}</option>
					</select>
				</div>
			</div>

			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="rua">Rua</label>
					<input type="text" value="" v-model="empresa.rua" name="rua" id="empresa_rua"  class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" for="bairro">Bairro</label>
					<input type="text" value="" name="bairro" id="empresa_bairro" v-model="empresa.bairro" class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" for="numero">Número</label>
					<input type="text" name="numero" id="empresa_numero" value="" v-model="empresa.numero" class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class=""  for="complemento">Complemento</label>
					<input type="text" name="complemento" id="empresa_complemento" value="" v-model="empresa.complemento" class="form-control form-float" autocomplete="off" />
				</div>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		props:['estados','empresadb', 'estadodb', 'cidadesdb'],
		data() {
			return {
				empresa: {
					nome:'',
					email:'',
					telefone: '',
					cnpj:'',
					cep: '',
					rua: '',
					bairro: '',
					cidade: '',
					estado: '',
					numero: '',
					complemento: '',
				},
				estado: '',
				carregando: false,
				mensagem: '',
				html: '',
				cidade: '',
				cidades: '',
				ibge: '',
				erro: false,
			}
		},	
		methods: {
			getData(obj) {
				console.log(obj);
				this.empresa.nome = obj.nome;
				this.empresa.email = obj.email;
				this.empresa.cnpj = obj.cnpj;
				this.empresa.telefone = obj.telefone;
				this.empresa.rua = obj.rua;
				this.empresa.bairro = obj.bairro;
				this.empresa.numero = obj.numero;
				this.empresa.complemento = obj.complemento;
				this.empresa.cep = obj.cep;
				this.empresa.estado = obj.cidade.estado_id;
				this.ibge = '';
				this.popularCidades();
				this.empresa.cidade = obj.cidade_id;
			},
			popularCidades() {
				var that = this;
				this.cidade = '';
				console.log(this.estado);
				if(this.estado)
				{
					this.carregando = true;
					this.mensagem = 'Buscando cidades...';
					this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
					axios.get('/estado/' + this.estado).then(function(response) {

						that.cidades = response.data;

						if(that.ibge) {
							var filtrado = that.cidades.filter(function(cidade) {
								return cidade.ibge == that.ibge;
							});

							that.cidade = filtrado[0].id;
						}

						
						that.carregando = false;

					});
				}
			},

			buscaCEP() {
				console.log(this.empresa.cep);
				var that = this;
				this.erro = false;
				if(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.empresa.cep)) {
					that.carregando = true;
					that.mensagem = 'Aguarde... Buscando CEP.';
					axios.get('https://viacep.com.br/ws/' + this.empresa.cep.replace(/\D/g,'') + "/json").then(function(response) {
						if(response.data.erro != true) {

							that.empresa.rua = response.data.logradouro;
							that.empresa.bairro = response.data.bairro;

							console.log(response.data);
							var filtrado = that.estados.filter(function(estado) {
								return estado.sigla == response.data.uf;
							});

							if (that.estado == filtrado[0]) {
								that.html = "<i class='fa fa-check fa-2x'></i>";
								that.mensagem = 'Sucesso, endereço encontrado!';
								that.carregando = false;
							}
							else
							{
								that.estado = filtrado[0].id;
							}

							that.ibge = response.data.ibge;

							that.popularCidades();

							$("#empresa_numero").focus();

						} else {
							that.rua = '';
							that.estado = '';
							that.bairro = '';
							that.numero = '';
							that.complemento = '';
							that.cidade = '';
							that.ibge = '';
							that.erro = true;
							that.mensagem = 'CEP inválido!';
							that.carregando = false;
							$("#empresa_cep").focus();
						}

					}).catch(function (error) {
						console.log(error);
					});
				} else {
					if(!this.empresa.cep == '') {
						that.rua = '';
						that.estado = '';
						that.bairro = '';
						that.numero = '';
						that.complemento = '';
						that.cidade = '';
						that.erro = true;
						that.ibge = '';
						$("#empresa_cep").focus();
						that.mensagem = 'CEP inválido!';
                   // that.enderecos[key].erros.push('CEP inválido');
                   that.carregando = false;
               }

           }

       }
   },
   mounted() {
   	console.log('Criar empresa');
   	if(this.empresadb != 0) {		
		this.empresa = this.empresadb;
		this.estado = this.estadodb;
		this.cidades = this.cidadesdb;
		this.cidade = this.empresadb.cidade_id;
	}

   }
}
</script>

<style lang="scss" scoped>
.error {
	input {
		color: red;
		border-color: red;
	}

	.form-control-feedback {
		color: red;
		font-size: 12px;
		margin-top: 5px;
		margin-bottom: -10px;
		font-weight: 700;
	}
}



</style>