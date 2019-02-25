 
<template>
	<div class="servico-componente">
		
		<div class="row">
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="nome">Nome</label>
					<input type="text" name="nome" v-model="servico.nome" id="nome" autocomplete="off" class="form-control form-float" />
				</div>
			</div>
			<div class="col-md-6 col-12 pad-10">
				<div class="form-group">
					<label class="" for="ativo">Ativo</label>
					<select name='ativo' v-model="servico.ativo" class="form-control form-float">
						<option value='1'>Sim</option>
						<option value='0'>Não</option>
					</select>
				</div>
			</div>
			<div class="col-md-12 col-12 pad-10">
				<div class="form-group">
					<label class="" for="descricao">Descricao do serviço</label>					
					<vue-editor v-model="servico.descricao"></vue-editor>
					<input type="hidden" name="descricao" v-model="servico.descricao" value="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	props:['servicodb'],		
		data() {
			return {
				servico: {
					nome:'',
					descricao:'',
					ativo:false,
				},
			}
		},	
		methods: {
			getData(obj) {
				console.log(obj);
				this.servico.nome = obj.nome;
				this.servico.descricao = obj.descricao;
				this.servico.ativo = obj.ativo;
			},
			
	   },
	   mounted() {
	   	console.log('Criar servico');
	   	if(this.servicodb != 0) {		
			this.servico = this.servicodb;
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