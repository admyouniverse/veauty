<template>
    <section class="slice slice-lg pt-lg" id="secao">
        <div id="saloes" v-if="$store.state.showSaloes" class="container">
            <div class="row row-grid">
                <div class="col-lg-12">
                    <div class="mb-md text-center">
                        <h3 class="heading h2">Lista de Salões</h3>
                        <div class="fluid-paragraph mt-3">
                            <p class="lead"><i class="fa fa-info-circle"></i> Clique sobre o salão para mais detalhes </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 salao" v-for='salao in $store.state.saloes' id="saloes">
                    <div class="card shadow-sm shadow--hover">
                        <img alt="Image placeholder" v-bind:src="'storage/salao/'+salao.imagem" style="cursor: pointer"  v-on:click="servico(salao)" class="card-img-top">
                        <div class="card-body py-5 text-center">
                            <a style="cursor: pointer" class="h5 lh-150" v-on:click="servico(salao)">{{salao.nome}}</a>
                            <h6 class="text-muted mt-4 mb-0"><i class="fa fa-map-marker"></i> {{salao.rua}}, {{salao.numero}} - {{salao.bairro}} - {{salao.cidade.nome}}/{{salao.cidade.estado.sigla}}</h6>

                        </div>

                        <div class="card-footer">
                            <div class="row">
                                <div class="col text-center">
                                    <ul class="list-inline mb-0">

                                        <li class="list-inline-item">
                                            <a href="#" class="text-muted" title="Serviços"><i class="fas fa-heart mr-1 text-muted"></i> {{salao.servicos_count}}</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-muted" title="Vouchers"><i class="fas fa-user mr-1 text-muted"></i> 10</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="text-muted" title="Avaliações"><i class="fas fa-star mr-1 text-muted"></i> 131</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="mt-lg text-center" v-if="$store.state.saloes.lenght > 6">
                <a href="#" class="btn btn-dark btn-circle shadow">Ver Mais</a>
            </div>
        </div>

        <div v-if="!$store.state.showSaloes" class="container" id="detalhesSalao">
            <div class="mb-md text-center">
                <h3 class="heading h2">{{$store.state.salao.nome}}</h3>
                <div class="fluid-paragraph mt-3">
                    <p class="lead"><i class="fa fa-map-marker"></i> {{$store.state.salao.rua}}, {{$store.state.salao.numero}} - {{$store.state.salao.bairro}} - {{$store.state.salao.cidade.nome}}/{{$store.state.salao.cidade.estado.sigla}}</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="table-responsive-lg" v-if="$store.state.salao.servicos_count > 0">
                        <table class="table table-hover table-scale--hover table-cards align-items-center">
                            <tbody>
                                <tr v-for='servico in $store.state.salao.servicos'>
                                    <th scope="row">
                                        <!-- <div class="media align-items-center">
                                            <span class="avatar avatar-lg bg-pink rounded mr-4"><i class="fa fa-star"></i></span>
                                            <div class="media-body">
                                                <a href="#" class="h5 mb-0" v-html="servico.pivot.descricao"></a>
                                            </div>
                                        </div> -->

                                        <span class="h5">{{servico.nome}}</span>

                                    </th>
                                    
                                    <td class="text-center">R$ <span class="h5">{{servico.pivot.valor}} <br> <small>ou <small>R$</small> {{ (servico.pivot.valor*0.9).toFixed(2) }} no <a href="" title="">VeautyClub</a></small></span>
                                    </td>
                                    <td class="text-right"> <span class="h6"> <button v-on:click="adicionar(servico)" type="button" class="btn btn-primary btn-animated btn-animated-x">
                                        <span class="btn-inner--visible">Adicionar</span>
                                        <span class="btn-inner--hidden"><i class="fas fa-shopping-bag"></i></span>
                                    </button></span>
                                </td>
                            </tr>
                            <tr class="table-divider"></tr>                               

                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p class='alert alert-warning'>Não há serviços cadastrados para este salão.</p>
                </div>
                <div class="text-center mt-5">
                    <a style="cursor: pointer" v-on:click="voltar"><i class="fas fa-angle-left mr-2"></i>Voltar</a>
                </div>
            </div>
        </div>
    </div>

</section>
</template>


<script>
export default {
    props:[],
    data() {
        return {

        }
    },	
    methods: {
        getData(obj) {

        }, 

        servico: function (salao) {       
            this.$store.state.showSaloes = false;
            this.$store.commit("setSalao", salao);
            let that = this;
            Vue.nextTick(function () {
                that.scrollTo('#detalhes_'+salao.id);
            })
        },
        scrollTo: function ($el){
            $('html,body').animate({ scrollTop: $($el).offset().top - 100 }, 'slow');
        }, 
        voltar: function(){
            this.$store.state.showSaloes = true;
            let that = this;
            setTimeout(() => {
                that.$scrollTo('#salao_'+that.$store.state.salao.id);
                that.$store.commit("setSalao", '');
            }, 100);
        },
        adicionar: function($item) {  

            var that = this;
            axios.get('/carrinho/create').then(function(response){
                that.carrinho = response.data;
                console.log(that.carrinho.id);
                console.log($item);

                axios.get('/carrinho/adiciona/' + $item.pivot.id).then(function(response) {
                    console.log(response);
                    console.log('foi!!!!');
                    that.$store.state.carrinhoTotal = response.data.servicos.length;
                    that.$store.state.carrinho = response.data;
                    Vue.toasted.success("'" + $item.nome + "' adicionado a sacola!", { 
                       theme: "primary", 
                       position: "top-right", 
                       duration : 5000
                   });
                }).catch(function(error) {
                    console.log(error);
                    if(error.response.status == 423) {
                        iziToast.show({
                            class: 'iziToast-danger',
                            title: 'Ops!',
                            message: 'Produto atingiu o limite de estoque',
                            animateInside: false,
                            position: 'topCenter',
                            progressBar: true,
                            icon: 'icon-check',
                            timeout: 3200,
                            transitionIn: 'fadeInLeft',
                            transitionOut: 'fadeOut',
                            transitionInMobile: 'fadeIn',
                            transitionOutMobile: 'fadeOut'
                        });
                    }
                });
            });
        }

    },
    mounted() {
        console.log('Listar Salões');       	
    },
}
</script>

<style type="text/css">
.salao{
    margin-bottom:20px;
}
</style>