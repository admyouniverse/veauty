<template>
    <div class="modal fade" id="modal_chat" tabindex="-1" role="dialog" aria-labelledby="modal_1" aria-hidden="true">

        <div class="modal-dialog" role="document">
            <div class="modal-content">
            </div>
        </div>
        <div v-if="this.$store.state.servico.salao" class="chat_window">
            <div class="top_menu">
                <div class="buttons">
                    <div @click="fechar" class="button fechar"><span>x</span></div>
                    <div class="button minimize"><span>-</span></div>
                    <div class="button maximize"><span>+</span></div>
                </div>
                <div class="title" v-if="this.tipo == 1">{{ this.$store.state.servico.salao.nome }}</div>
                <div class="title" v-if="this.tipo == 2">{{ this.$store.state.servico.cliente.cliente.nome }}</div>
            </div>
            <ul class="messages">
                <li v-if="tipo == 1" class="message left appeared">
                    <div class="avatar"></div>
                    <div class="text_wrapper">
                        <div class="text">Olá, {{ this.usuario.cliente.nome }}! <br> Esta é uma mensagem automática do BeautyPass. <br>
                            No <b>{{ this.$store.state.servico.salao.nome }}</b> você precisa agendar os seguintes serviços: <br>
                            <ul>
                                <li>Serviço 1</li>
                                <li>Serviço 2</li>
                                <li>Serviço 3</li>
                            </ul>
                            <br>
                            Use esta conversa para agendar, ou se preferir, ligue para o número {{ this.$store.state.servico.salao.telefone }}.
                        </div>
                    </div>
                </li>

                <li class="message appeared" v-bind:class="{'right': mensagem.tipo == tipo, 'left': mensagem.tipo != tipo}"  v-for='mensagem in this.$store.state.mensagens'>
                     <div class="avatar"  v-bind:style="{ 'background-image': 'url(' + mensagem.avatar + ')' }">
                        
                     </div>
                     <div class="text_wrapper">
                         <div class="text">{{ mensagem.mensagem }} <!-- // {{ mensagem.tipo }} // {{ tipo }} // {{ mensagem.tipo == tipo }} // {{ mensagem.tipo != tipo }} // {{ mensagem.avatar }} --></div>
                     </div>
                </li>
            </ul>
            <div class="bottom_wrapper clearfix">
                <div class="message_input_wrapper">
                    <input @keyup.enter="enviar" v-model="texto" class="message_input" placeholder="Digite sua mensagem aqui..." />
                </div>
                <div @click="enviar" class="send_message">
                    <!-- <div class="icon"></div>  -->
                    <div class="text">Enviar</div>
                </div>
            </div>
        </div>
        <div class="message_template">
            <li class="message">
                <div class="avatar"></div>
                <div class="text_wrapper">
                    <div class="text"></div>
                </div>
            </li>
        </div>                        

    </div>

</template>

<script>
export default {
    props:['usuario', 'tipo', 'avatar'],
    data() {
        return {
            texto: '',
        }
    },
    methods: {
        fechar: function() {
            console.log(this.usuario);
            $("#modal_chat").modal('hide');
        },
        enviar: function() {
           
            this.$emit('messagesent', {
                    user: this.usuario,
                    mensagem: this.texto,
                    tipo: this.tipo,
                    avatar: this.avatar, 
                    servico: this.$store.state.servico,
                });

            this.texto = "";
        }
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
