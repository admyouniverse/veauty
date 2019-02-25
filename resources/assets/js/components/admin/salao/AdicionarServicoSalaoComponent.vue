 
<template>
	<div class="row">
	    <div class="col-md-4">
	      <div class="form-group">
	        <label>Serviço: </label>
	        <select name='servico' class='form-control form-float' v-model='servico.id'>
	        	<option selected disabled hidden>Escolha o serviço</option>
			    <option v-for="srv in this.servicosdb" :value="srv.id">{{srv.nome}}</option>
  			</select>
	      </div>
	      
	    </div>           
	    <div class="col-md-4"> 
	      <div class="form-group">
	        <label>Valor:</label>
	        <money class="form-control form-float" v-model="pivot.valor"></money>
			<input type="hidden" value="" id="valor" name="valor" v-model="pivot.valor">
	    	<input type="hidden" name="id"  v-model="coloca"> 
	      </div>
	    </div> 
	     <div class="col-md-12">
	      <div class="form-group">
	        <label>Descricao:</label>
	        <vue-editor v-model="pivot.descricao"></vue-editor>
			<input type="hidden" name="descricao" v-model="pivot.descricao" value="">
	      </div>
	    </div>           
  	</div>  	
</template>

<script>
	export default {
		props:['servicosdb','servicodb'],
		data() {
			return {
				servico: [],
				pivot: [],
				coloca: null,				
			}
		},	
		methods: {
			
		   
		},
		mounted() {		   	
	   		if(this.servicodb){
	   			this.servico = this.servicodb;
	   			this.pivot = this.servicodb.pivot;
	   			this.coloca = this.servicodb.pivot.id;
	   			console.log(this.coloca);
	   		}
	   		
	   		console.log('Add servico no salão');

	   }
	}
</script>

