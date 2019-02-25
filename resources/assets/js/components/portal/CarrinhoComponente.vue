<template>
  <div class="table-responsive">
    <table class="table align-items-center">
        <thead>
            <tr>
                <th>Serviço</th>
                <!-- <th>Quantidade</th> -->
                <th>Valor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in this.$store.state.carrinho.servicos">
                <td>
                    <div class="media align-items-center">
                        <div class="media-body">
                            <div class="lh-100">
                                <span class="text-dark font-weight-bold mb-0">{{item.detalhes.nome}}</span>
                            </div>
                            <span class="font-weight-bold text-muted">{{ item.salao.nome }}</span>
                        </div>
                    </div>
                </td>
              <!--   <td>
                    <input type="text" class="form-control form-control-sm text-center" style="width: 80px;" value="1">
                </td> -->
                <td>
                    <span class="font-weight-bold text-dark">R$ {{ item.subtotal }}</span>
                </td>
                <td class="text-right">
                    <button @click="excluir(item)" type="button" class="btn btn-sm btn-danger btn-icon-only rounded-circle">
                        <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>
                    </button>
                </td>
            </tr>


        </tbody>
    </table>
</div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
        console.log(this.$store.state.carrinho.servicos);
    },

    methods: {
        excluir: function(item) {
            var that = this;
            axios.get('/carrinho/remover/' + item.id).then(function(response) {
                that.$store.state.carrinhoTotal = response.data.servicos.length;
                that.$store.state.carrinho = response.data;
                
            });
        }
    }
}
</script>
