 
<template>
	<div class="salao-componente">
		<BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
		
		<div class="row">
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="nome">Nome</label>
					<input type="text" name="nome" v-model="salao.nome" id="nome" autocomplete="off" class="form-control form-float" />
				</div>
			</div>
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="cnpj">CNPJ do salao</label>
					<input type="text" value="" id="salao_cnpj" autocomplete="off" name="cnpj" v-model="salao.cnpj" v-mask="'##.###.###/####-##'" class="form-control form-float" />
				</div>
			</div>
			<div class="col-md-12 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="cnpj">Imagem do Salão</label>
					<input type="file" value="" id="salao_imagem" name='imagem' class="form-control form-float" />
				</div>
			</div>
			<div class="col-md-5 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="telefone">Telefone</label>
					<input type="text" name="telefone" v-model="salao.telefone" v-mask="'(##) #####-####'" class="form-control form-float" autocomplete="off" value="">
				</div>
			</div>
			<div class="col-md-7 col-12 pad-10">
				<div class="form-group">
					<label class="" for="email">Email</label>
					<input type="email" name="email" value="" id="salao_email" v-model="salao.email"  class="form-control form-float" autocomplete="off">
				</div>
			</div>
			<div class="col-md-4 col-12 pad-10">
				<div class="form-group" :class="{'error':erro}">
					<label class=""  for="cep">CEP</label>
					<input type="text" value="" @blur="buscaCEP" id="salao_cep" name="cep" v-model="salao.cep" v-mask="'##.###-###'" class="form-control form-float" autocomplete="off" />
					<div class="form-control-feedback" v-if="erro">CEP inválido</div>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class="" for="estado">Estado</label>
					<select class="form-control form-float" @change="popularCidades" v-model="estado" id="salao_estado" name="estado">
						<option value="x" disabled></option>
						<option :value="estado.id" v-for="estado in estados">{{ estado.nome }}</option>
					</select>
				</div>
			</div>
			<div class="col-md-4 col-6 pad-10">
				<div class="form-group">
					<label class="" for="cidade">Cidade</label>
					<select class="form-control form-float" v-model="cidade" id="salao_cidade" name="cidade">
						<option value="x" v-if="!estado" disabled>Selecione primeiro um estado</option>
						<option :value="cidade.id" v-for="cidade in cidades">{{ cidade.nome }}</option>
					</select>
				</div>
			</div>

			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="rua">Rua</label>
					<input type="text" value="" v-model="salao.rua" name="rua" id="salao_rua"  class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" for="bairro">Bairro</label>
					<input type="text" value="" name="bairro" id="salao_bairro" v-model="salao.bairro" class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class=""  for="numero">Número</label>
					<input type="text" name="numero" id="salao_numero" value="" v-model="salao.numero" class="form-control form-float" autocomplete="off" />
				</div>
			</div>
			<div class="col-md-2 col-6 pad-10">
				<div class="form-group">
					<label class="" for="complemento">Complemento</label>
					<input type="text" name="complemento" id="salao_complemento" value="" v-model="salao.complemento" class="form-control form-float" autocomplete="off" />
				</div>
			</div>

			<div class='col-md-12'>
			<gmap-autocomplete :value="this.currentPlace"
			        @place_changed="updatePlace"
			        :select-first-on-enter="true"
			        class='form-control'>
			</gmap-autocomplete>
		    <gmap-map
		      :center="center"
		      :zoom="16"
		      style="width:100%;  height: 400px;"
		    >
		      <gmap-marker
		        :position="marker.position"
		        :draggable="true"
		        @click="center=marker.position"
		        @drag="updateCoordinates"
		      ></gmap-marker>
		    </gmap-map>
		  </div>
		  <input type="hidden" name="lat" v-model="place && place.lat">
		  <input type="hidden" name="lng" v-model="place && place.lng">
		</div>
	</div>
</template>

<script>
	export default {
		props:['estados', 'salaodb', 'estadodb', 'cidadesdb'],
		name: "GoogleMap",
		data() {
			return {
				salao: {
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
					latitude:'',
					longitude:'',
					imagem:'',
				},
				estado: '',
				carregando: false,
				mensagem: '',
				html: '',
				cidade: '',
				cidades: '',
				ibge: '',
				erro: false,
				center: { lat: 45.508, lng: -73.587 },
		        marker:{position: {
		        	lat: null,
		        	lng: null,
		        }},
		        place: null,
		        currentPlace: null
			}
		},	
		methods: {
			getData(obj) {
				console.log(obj);
				this.salao.nome = obj.nome;
				this.salao.email = obj.email;
				this.salao.cnpj = obj.cnpj;
				this.salao.telefone = obj.telefone;
				this.salao.rua = obj.rua;
				this.salao.bairro = obj.bairro;
				this.salao.numero = obj.numero;
				this.salao.complemento = obj.complemento;
				this.salao.cep = obj.cep;
				this.salao.estado = obj.cidade.estado_id;
				this.ibge = '';
				this.popularCidades();
				this.salao.cidade = obj.cidade_id;
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
				console.log(this.salao.cep);
				var that = this;
				this.erro = false;
				if(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.salao.cep)) {
					that.carregando = true;
					that.mensagem = 'Aguarde... Buscando CEP.';
					axios.get('https://viacep.com.br/ws/' + this.salao.cep.replace(/\D/g,'') + "/json").then(function(response) {
						if(response.data.erro != true) {

							that.salao.rua = response.data.logradouro;
							that.salao.bairro = response.data.bairro;

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

							$("#salao_numero").focus();

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
							$("#salao_cep").focus();
						}

					}).catch(function (error) {
						console.log(error);
					});
				} else {
					if(!this.salao.cep == '') {
						that.rua = '';
						that.estado = '';
						that.bairro = '';
						that.numero = '';
						that.complemento = '';
						that.cidade = '';
						that.erro = true;
						that.ibge = '';
						$("#salao_cep").focus();
						that.mensagem = 'CEP inválido!';
                   // that.enderecos[key].erros.push('CEP inválido');
                   that.carregando = false;
               }

           }

       },
	    updatePlace(what) {	
	    console.log(what);      	
	        const marker = {
	          lat: what.geometry.location.lat(),
	          lng: what.geometry.location.lng()
	        };
	        this.marker.position = marker;
		      
            this.place = {
              lat: what.geometry.location.lat(),
              lng: what.geometry.location.lng()
            };
            this.center = marker;
        },
        updateCoordinates(location){
        	this.place = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
        },
	    geolocate: function() {
	      navigator.geolocation.getCurrentPosition(position => {
	        this.center = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };
	      });
	    }
   },
   mounted() {
   		
   		if(this.salaodb != 0) {		
			this.salao = this.salaodb;
			this.estado = this.estadodb;
			this.cidades = this.cidadesdb;
			this.cidade = this.salaodb.cidade_id;

			const item = this.cidades.find(item => item.id === this.salaodb.cidade_id);
	  		const index = this.cidades.indexOf(item);
	  		const item2 = this.estados.find(item => item.id === this.estadodb);
	  		const index2 = this.estados.indexOf(item2);
			this.currentPlace = this.salao.rua + ', ' + this.salao.numero + ' - ' + this.salao.bairro + ', ' + this.cidades[index].nome + ' - ' + this.estados[index2].nome + ', Brasil';
			
	        this.marker.position = {
	          lat: parseFloat(this.salaodb.latitude),
	          lng: parseFloat(this.salaodb.longitude)
	        };
	        this.place = {
	          lat: parseFloat(this.salaodb.latitude),
	          lng: parseFloat(this.salaodb.longitude)
	        };	  
	        this.center = {
	          lat: parseFloat(this.salaodb.latitude),
	          lng: parseFloat(this.salaodb.longitude)
	        };	      
		}else{
			this.geolocate();
		}

   		console.log('Criar salao');

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