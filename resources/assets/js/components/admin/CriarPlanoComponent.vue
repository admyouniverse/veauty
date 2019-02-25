 
<template>
	<div class="plano-componente">
	
		<div class="row">
			<div class="col-md-12 col-12 pad-10">
				<div class="form-group">
					<label class="" for="nome">Nome</label>
					<input type="text" name="nome" v-model="plano.nome" id="nome" autocomplete="off" class="form-control form-float" />
				</div>
			</div>
			
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="valor">Valor do plano</label>
					<money class="form-control form-float" v-model="plano.valor"></money>
					<input type="hidden" value="" id="valor" name="valor" v-model="plano.valor">
				</div>
			</div>
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="pontos">Pontos</label>
					<input type="text" value="" id="pontos" autocomplete="off" name="pontos" v-model="plano.pontos"  class="form-control form-float" />
				</div>
			</div>	
			<div class="col-md-12 col-12 pad-10">
				<div class="form-group">
					<label class=""  for="descricao">Descricao do plano</label>
					<vue-editor v-model="plano.descricao"></vue-editor>
					<input type="hidden" name="descricao" v-model="plano.descricao" value="">
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		props:['planodb'],	
		data() {
			return {
				plano: {
					nome:'',
					descricao:'',
					valor:'',
					pontos: '',
				},
			}
		},	
		methods: {
			getData(obj) {
				console.log(obj);
				this.plano.nome = obj.nome;
				this.plano.descricao = obj.descricao;
				this.plano.valor = obj.valor;
				this.plano.pontos = obj.pontos;
			},
			
	   },
	   mounted() {
	   	console.log('Criar Plano');
	   	console.log(this.planodb);
	   	if(this.planodb != 0) {		
			this.plano = this.planodb;
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