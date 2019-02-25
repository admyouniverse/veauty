<template>
	<div>
        <h3>Escolha o profissional:</h3>
        <select class="form-control form-float" v-model="profissional" id="profissional" name="profissional">
            <option value="x" v-if="!profissional" disabled>Selecione primeiro um profissional</option>
            <option :value="prof.id" v-for="prof in profissionais">{{ prof.nome }}</option>
        </select>
        <br>
       <h3>Agendar data para atendimento:</h3>
	    <vue-ctk-date-time-picker
            v-model="value"
            :minute-interval="5"
            color="purple"
            enable-button-validate
            locale="pt-BR"
            label="Selecione a data e hora"
            ></vue-ctk-date-time-picker>

            <div class="container text-center">
                <a v-on:click="salvar" class="btn btn-white btn-circle mt-4">Salvar</a>
            </div>
    </div>
</template>

<script>

export default {
	props:['profissionaldb'],
		data() {
			return {
				value: '',
                profissionais: [],
                profissional:'',
			}
		},	
		methods: {
			salvar: function(){
				let that = this;
                console.log(this.profissional);
				axios.post('/agenda/store', {date: that.value, profissional: that.profissional})
                    .then(response => {
                        alert('Agendado!');
                        window.location.href = '/cliente/agenda';
                    })
                    .catch(error => console.log(error));
			}
		},
        mounted(){
            
            if(this.profissionaldb != 0) {     
                this.profissionais = this.profissionaldb;
            }
        }
}
</script>