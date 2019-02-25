<template>
	<section id="sct_contact_form" class="slice slice-lg pt-md">
        <div class="container">
            <div class="row row-grid justify-content-center align-items-center">
                <div class="col-lg-12 text-center pb-md"> <h1>Duvidas? Reclamações? Sugestões?</h1></div>
                <div class="col-lg-6">
                  <p v-if="errors.length">
				    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
				    <ul>
				      <li v-for="error in errors">{{ error }}</li>
				    </ul>
				  </p>
                    <form @submit="sendFormData" id='formContato'>
                        <div class="form-group">
                            <label class="sr-only">Seu nome</label>
                            <input class="form-control form-control-lg" placeholder="Seu nome" type="text" v-model="contato.nome">
                        </div>
                        <div class="form-group">
                            <label class="sr-only">Seu e-mail</label>
                            <input class="form-control form-control-lg" placeholder="Seu e-mail" type="text" v-model="contato.email">
                        </div>
                        <div class="form-group">
                            <label class="sr-only">Seu número</label>
                            <input class="form-control form-control-lg" placeholder="Seu telefone" type="text" v-model="contato.telefone">
                        </div>
                        <div class="form-group">
                            <label class="sr-only">Escreva sua mensagem</label>
                            <textarea class="form-control form-control-lg textarea-autosize" rows="5" placeholder="Escreva sua mensagem" v-model="contato.mensagem"></textarea>
                        </div>
                        <a type="submit" class="btn btn-lg btn-block btn-primary shadow mt-4">Enviar</a>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
	export default {
		data() {
			return {
				errors:[],
				contato:{
					nome:'',
					email:'',
					telefone:'',
					mensagem:'',
				},
			}
		},	
		methods: {
			checkForm: function (e) {
		      this.errors = [];

		      if (!this.contato.nome) {
		        this.errors.push('O nome é obrigatório.');
		      }
		      if (!this.contato.email) {
		        this.errors.push('O email é obrigatório.');
		      }else if (!this.validEmail(this.contato.email)) {
		        this.errors.push('Utilize um e-mail válido.');
		      }
		      if (!this.contato.mensagem) {
		        this.errors.push('Escreva uma mensagem.');
		      }

		      if (!this.errors.length) {
		      	this.sendFormData();
		        //return true;
		      }

		      e.preventDefault();
		    },
		    validEmail: function (email) {
		      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		      return re.test(email);
		    },
		    sendFormData() {
		      console.log('olar');
		      this.erros = [];
		      formContents = jQuery("#formContato").serialize();
		      console.log(formContents);
		      axios.post('/contato', formContents).then(response => {
		        if (response.data.success) {
			        this.aviso = 'Mensagem enviada com sucesso!';
			    } else {
			        this.aviso = 'Erro ao enviar mensagem!';
			        this.errors = response.data.errors;
			    }
		      }).catch(error => {
		        this.aviso = 'Erro ao enviar mensagem!';
		      });
		    },
            
	   },
   mounted() {
   	

   }
}
</script>
