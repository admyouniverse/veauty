
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


 require('./bootstrap');
 window.Vue = require('vue');

 import Vuex from 'vuex';
 import VueMask from 'v-mask';
 import BlockUI from 'vue-blockui'; 
 import editor from 'vue2-medium-editor';
 import VueEditor from "vue2-editor";
 import money from 'v-money';
 import VueQrcodeReader from 'vue-qrcode-reader';
 import * as VueGoogleMaps from "vue2-google-maps";
 import PictureInput from 'vue-picture-input';
 import Autocomplete from 'vue2-autocomplete-js';
 import Toasted from 'vue-toasted';

 import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
 import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


 import Echo from 'laravel-echo'



 window.Pusher = require('pusher-js');

 window.Echo = new Echo({
 	broadcaster: 'pusher',
 	key: process.env.MIX_PUSHER_APP_KEY,
 	cluster: process.env.MIX_PUSHER_APP_CLUSTER,

 });


 window.axios = require('axios');
 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
 
 Vue.prototype.$http = window.axios

 Vue.use(VueGoogleMaps, {
 	load: {
 		key: "AIzaSyByWD1uKbBef8Q3LhJRBHXHIiHtKitZPvQ",
    libraries: "places" // necessary for places input
}
});

 Vue.use(VueQrcodeReader);
 Vue.use(VueMask);
 Vue.use(BlockUI);
 Vue.use(Vuex);
 Vue.use(money, {precision: 2, decimal: ',', thousands: '.', prefix: '', masked: false});
 Vue.use(VueEditor);
 Vue.use(Toasted)


 Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 Vue.component('criar-plano-componente', require('./components/admin/CriarPlanoComponent.vue').default);
 Vue.component('criar-servico-componente', require('./components/admin/CriarServicoComponent.vue').default);
//Empresa
Vue.component('criar-empresa-componente', require('./components/admin/empresa/CriarEmpresaComponent.vue').default);

//Salão
Vue.component('criar-salao-componente', require('./components/admin/salao/CriarSalaoComponent.vue').default);
Vue.component('add-servico-salao-componente', require('./components/admin/salao/AdicionarServicoSalaoComponent.vue').default);
Vue.component('ler-qr-componente', require('./components/salao/LerQRComponente.vue').default);
Vue.component('tab-component', require('./components/admin/salao/TabSalaoComponent.vue').default);
Vue.component('editar-salao-componente', require('./components/salao/EditarSalaoComponent.vue').default);
Vue.component('agenda-componente', require('./components/salao/AgendaComponent.vue').default);

//Cliente
Vue.component('criar-cliente-componente', require('./components/admin/cliente/CriarClienteComponent.vue').default);

//Portal
Vue.component('criar-mapa-componente', require('./components/portal/CriarMapaComponent.vue').default);
Vue.component('contato-componente', require('./components/portal/ContatoComponent.vue').default);
Vue.component('listar-salao-componente', require('./components/portal/ListarSaloesComponent.vue').default);
Vue.component('pontos-componente', require('./components/portal/PontosComponent.vue').default);
Vue.component('carrinho-componente', require('./components/portal/CarrinhoComponente.vue').default);
Vue.component('carrinho-lateral', require('./components/portal/CarrinhoLateralComponente.vue').default);
Vue.component('botao-chat', require('./components/portal/BotaoChat.vue').default);
Vue.component('chat', require('./components/portal/ChatComponente.vue').default);
//Empresa
Vue.component('endereco-componente', require('./components/empresa/EnderecoComponent.vue').default);

Vue.component('autocomplete', require('./autocomplete/src/js/components/vue-autocomplete.vue').default);

const store =  new Vuex.Store({
	state: {
		saloes: {},
		markers: [],
		salao: {},
		showSaloes: true,
		cidade:{},
		pontos: '',
		carrinhoTotal: 0,
		carrinho: {},
		servico: {},
		mensagens: [],
	},
	getters: {
		saloesAll(state) {
			return state.todos;
		}
	},
	mutations: {
		setSaloes(state, obj) {
			state.saloes = obj;
		},
		setMarkers(state, obj) {
			state.markers = obj;
		},
		addMarkers(state, value){      
			state.markers.push({
				position: value.position,
				text: value.text,
				salao: value.salao,
			})
		},
		setSalao(state, obj) {
			state.salao = obj;
		},
		setCidade(state, location) {
			state.cidade.cidade = location.results[0].address_components[3].long_name;
			state.cidade.estado = location.results[0].address_components[4].short_name;            
			state.cidade.completo = location.results[0].address_components[3].long_name +'/'+ location.results[0].address_components[4].short_name;
		},  
		setPontos(state, value) {
			state.pontos = value;
		},       
	},
	actions: {
		setSaloes(context, obj) {
			setTimeout(() => {
				context.commit('setSaloes', obj)
			}, 100)
		},
		setMarkers(context, obj) {
			setTimeout(() => {
				context.commit('setMarkers', obj)
			}, 100)
		},
		addMarkers(context, value) {
			setTimeout(() => {
				context.commit('addMarkers', value)
			}, 100)
		},
		setSalao(context, obj) {
			setTimeout(() => {
				context.commit('setSalao', obj)
			}, 100)
		},
		setCidade(context, location) {
			setTimeout(() => {
				context.commit('setCidade', location)
			}, 100)
		},
		setPontos(context, value) {
			setTimeout(() => {
				context.commit('setPontos', value)
			}, 100)
		},
	},
});


const app = new Vue({
	el: '#app',
	store,
	created() {
		this.atualiza();
	},
	mounted() {
        // Echo.private('chat')
        // .listen('MensagemEvento', (e) => {

        //     console.log(e);
        //     this.$store.state.mensagens.push({
        //         mensagem: e.mensagem,
        //         tipo: e.tipo,
        //         avatar: e.avatar,
        //     });

        //     var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
        //     audio.play();

        //     if(!$("#modal_chat").hasClass('show') && !$("#modal_chat").hasClass('in')){
        //         var that = this;
        //         console.log(e.servico);
        //         toastr.info(e.mensagem, e.autor, {
        //             onclick: function(){
        //                 that.$store.state.servico = e.servico;
        //                 console.log(that.$store.state.mensagens)
        //                 axios.get('/mensagens/' + e.servico.user_id + "/" + e.servico.salao.id).then(function(response) {
        //                     that.$store.state.mensagens = response.data;
        //                     $('#modal_chat').modal('show');
        //                     $('#modal_chat').on('shown.bs.modal', function (e) {
        //                       $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
        //                   });
        //                 });
        //             }
        //         });

        //     }

        //          $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
        // });
    },
    methods: {
    	atualiza() {
    		var that = this;
    		axios.get('/carrinho/exists').then(function(response) {
    			if(response.data.vazio == true) {
    				that.$store.state.carrinhoTotal = 0;
    			} else {
                //console.log(response.data);
                that.$store.state.carrinho = response.data;
                that.$store.state.carrinhoTotal = that.$store.state.carrinho.servicos.length;
                console.log(that.$store.state.carrinho.servicos);
            }

            $("body").css('opacity', 1);
        });
    	},
    	addMessage(mensagem) {

    		console.log(mensagem);

    		this.$store.state.mensagens.push({
    			mensagem: mensagem.mensagem,
    			tipo: mensagem.tipo,
    			avatar: mensagem.avatar,
    		});

    		$('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);


    		axios.post('/mensagens/', {'mensagem': mensagem.mensagem, 'tipo': mensagem.tipo,'autor_id': mensagem.user.id, 'avatar': mensagem.avatar, servico: mensagem.servico}).then(response => {
    			console.log(response.data);
    		});
    	}
    }
});