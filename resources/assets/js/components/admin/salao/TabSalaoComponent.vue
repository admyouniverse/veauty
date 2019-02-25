<template>

    <li class="hidden-xs"><a href="#" @click="opcaoOrcamento()">{{nome}}</a></li>
 
</template>

<script>
  export default {
    props: ['id','opcao'],
    data() {
      return {        
        nome: '',
      }
    },
    mounted() {
      console.log('Component mounted.')
      if(this.opcao == 'servicos'){        
        this.nome = 'Serviços'; 
      }else if(this.opcao == 'plano'){
        this.nome = 'Plano';
      }else if(this.opcao == 'voucher'){
        this.nome = 'Vouchers';
      }
    },    
    methods: {
     opcaoOrcamento() {
      
    }
  }
}
</script>
