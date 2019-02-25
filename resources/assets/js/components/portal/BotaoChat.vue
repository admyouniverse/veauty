<template>
    <button  data-toggle="modal" data-target="#modal_1" @click="abrir" class="btn btn-sm btn-secondary btn-icon-only">
        <span class="btn-inner--icon"><i class="fas fa-comment"></i></span>
    </button>
</template>

<script>
export default {
    props:['servico'],
    methods: {
        abrir: function() {
            console.log(this.servico);
            var that = this;
            this.$store.state.servico = this.servico;
            console.log(that.$store.state.mensagens)
            axios.get('/mensagens/' + this.servico.user_id + "/" + this.servico.salao.id).then(function(response) {
                that.$store.state.mensagens = response.data;
                $('#modal_chat').modal('show');
                $('#modal_chat').on('shown.bs.modal', function (e) {
                  $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
              });
                
            });

        }
    },  
    mounted() {

    }
}
</script>
