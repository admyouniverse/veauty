 
<template>
	<div class="cliente-componente">
		<BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
		
		<div class="row">
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.nome != null}" for="nome">Nome</label>
					<input type="text" name="nome" v-model="cliente.nome" id="nome" autocomplete="off" class="form-control" />
				</div>
			</div>
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="cpf">CPF</label>
					<input type="text" value="" id="cliente_cpf" autocomplete="off" name="cpf" v-model="cliente.cpf" v-mask="'###.###.###-##'" class="form-control" />
				</div>
			</div>

			<div class="col-md-5 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.telefone != null && cliente.telefone != ''}" for="telefone">Telefone</label>
					<input type="text" name="telefone" v-model="cliente.telefone" v-mask="'(##) #####-####'" class="form-control" autocomplete="off" value="">
				</div>
			</div>
			<div class="col-md-7 col-12 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.email != null && cliente.email != ''}" for="email">Email</label>
					<input type="email" name="email" value="" id="cliente_email" v-model="cliente.email"  class="form-control" autocomplete="off">
				</div>
			</div>
			<div class="col-md-4 col-12 pad-10">
				<div class="form-group" :class="{'error':erro}">
					<label class=""  for="cep">CEP</label>
					<input type="text" value="" @blur="buscaCEP" id="cliente_cep" name="cep" v-model="cliente.cep" v-mask="'##.###-###'" class="form-control" autocomplete="off" />
					<div class="form-control-feedback" v-if="erro">CEP inválido</div>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class="" for="estado">Estado</label>
					<select class="form-control" @change="popularCidades" v-model="estado" id="cliente_estado" name="estado">
						<option value="x" disabled></option>
						<option :value="estado.id" v-for="estado in estados">{{ estado.nome }}</option>
					</select>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class=""  for="cidade">Cidade</label>
					<select class="form-control" v-model="cidade" id="cliente_cidade" name="cidade">
						<option value="x" v-if="!estado" disabled>Selecione primeiro um estado</option>
						<option :value="cidade.id" v-for="cidade in cidades">{{ cidade.nome }}</option>
					</select>
				</div>
			</div>

			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="rua">Rua</label>
					<input type="text" value="" v-model="cliente.rua" name="rua" id="cliente_rua"  class="form-control" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.bairro != null && cliente.bairro != ''}" for="bairro">Bairro</label>
					<input type="text" value="" name="bairro" id="cliente_bairro" v-model="cliente.bairro" class="form-control" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.numero != null && cliente.numero != ''}" for="numero">Número</label>
					<input type="text" name="numero" id="cliente_numero" value="" v-model="cliente.numero" class="form-control" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" :class="{'label-completo':cliente.complemento != null && cliente.complemento != ''}" for="complemento">Complemento</label>
					<input type="text" name="complemento" id="cliente_complemento" value="" v-model="cliente.complemento" class="form-control" autocomplete="off" />
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	props:['estados','clientedb', 'estadodb', 'cidadesdb'],
	data() {
		return {
			cliente: {
				nome:'',
				email:'',
				telefone: '',
				cpf:'',
				cep: '',
				rua: '',
				bairro: '',
				cidade: '',
				estado: '',
				numero: '',
				complemento:'',
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
			this.cliente.nome = obj.nome;
			this.cliente.email = obj.email;
			this.cliente.cnpj = obj.cnpj;
			this.cliente.telefone = obj.telefone;
			this.cliente.rua = obj.rua;
			this.cliente.bairro = obj.bairro;
			this.cliente.numero = obj.numero;
			this.cliente.complemento = obj.complemento;
			this.cliente.cep = obj.cep;
			this.cliente.estado = obj.cidade.estado_id;
			this.ibge = '';
			this.popularCidades();
			this.cliente.cidade = obj.cidade_id;
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
			console.log(this.cliente.cep);
			var that = this;
			this.erro = false;
			if(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cliente.cep)) {
				that.carregando = true;
				that.mensagem = 'Aguarde... Buscando CEP.';
				axios.get('https://viacep.com.br/ws/' + this.cliente.cep.replace(/\D/g,'') + "/json", {
					transformRequest: [function (data, headers) {
						delete headers['X-Socket-Id'];
						return data;
					}]	
				}).then(function(response) {
					if(response.data.erro != true) {

						that.cliente.rua = response.data.logradouro;
						that.cliente.bairro = response.data.bairro;

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

						$("#cliente_numero").focus();

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
						$("#cliente_cep").focus();
					}

				}).catch(function (error) {
					console.log(error);
				});
			} else {
				if(!this.cliente.cep == '') {
					that.rua = '';
					that.estado = '';
					that.bairro = '';
					that.numero = '';
					that.complemento = '';
					that.cidade = '';
					that.erro = true;
					that.ibge = '';
					$("#cliente_cep").focus();
					that.mensagem = 'CEP inválido!';
                   // that.enderecos[key].erros.push('CEP inválido');
                   that.carregando = false;
               }

           }

       }
   },
   mounted() {
   	console.log('Criar cliente');
   	if(this.clientedb != 0) {		
   		this.cliente = this.clientedb;
   		this.estado = this.estadodb;
   		this.cidades = this.cidadesdb;
   		this.cidade = this.clientedb.cidade_id;
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