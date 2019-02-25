<template>
   <div class="col-lg-4">

                        <div data-toggle="sticky" data-sticky-offset="100">

                            <div class="card" id="card-summary">
                                <div class="card-header py-3">
                                    <div class="row align-items-center">
                                        <div class="col-6">
                                            <span class="h6">Sacola</span>
                                        </div>
                                        <div class="col-6 text-right">
                                            <span class="badge badge-md badge-pill badge-info">{{ $store.state.carrinhoTotal }} serviços</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row" v-for="item in this.$store.state.carrinho.servicos">
                                        <div class="col-8" >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <div class="text-limit lh-100">
                                                        <small class="text-dark font-weight-bold mb-0">{{ item.detalhes.nome }}</small>
                                                    </div>
                                                    <small class="text-muted">{{ item.salao.nome }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 text-right lh-100">
                                            <small class="text-dark">R${{ item.subtotal }}</small>
                                        </div>
                                    </div>
                                   
                                    <!-- Subtotal -->
                                    <div class="row mt-3 pt-3 border-top">
                                        <div class="col-8 text-right">
                                            <small class="text-dark font-weight-bold">Total:</small>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-sm font-weight-bold">R$ {{ $store.state.carrinho.total }}</span>
                                        </div>
                                    </div>
        

                                </div>
                            </div>

                        </div>

                    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
