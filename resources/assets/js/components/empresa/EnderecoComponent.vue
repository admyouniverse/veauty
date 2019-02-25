<template>
 <div>
   <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
   <div class="row">
    <div class="col-sm-6">
        <div class="form-group">
            <label for="checkout-company">CEP</label>
            <input autocomplete="nope" class="form-control" required name="cep" @blur="buscaCEP" type="text" id="cep" v-model="cep" v-mask="'##.###-###'" >                
        </div>
    </div>
    <div class="col-sm-6">
        <div class="form-group">
            <label for="account-zip">Rua</label>
            <input autocomplete="nope" class="form-control" required name="rua" type="text" v-model="rua" required>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-4">
        <div class="form-group">
            <label for="account-address2">Bairro</label>
            <input autocomplete="nope" class="form-control" required name="bairro" v-model="bairro" type="text" id="account-address2">
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
         <label for="account-address1">Número</label>
         <input autocomplete="nope" class="form-control" id="numero" name="numero" v-model="numero" type="text"  required>
     </div>
 </div>
 <div class="col-sm-4">
    <div class="form-group">
        <label for="">Complemento</label>
        <input autocomplete="nope" type="text" name="complemento" v-model="complemento" class="form-control">
    </div>
</div>
</div>
<div class="row">
    <div class="col-md-6 col-6 pad-10">
        <div class="form-group">
            <label class="" for="estado">Estado</label>
            <select class="form-control" @change="popularCidades" v-model="estado" id="cliente_estado" name="estado">
                <option value="x" disabled></option>
                <option :value="estado.id" v-for="estado in estados">{{ estado.nome }}</option>
            </select>
        </div>
    </div>
    <div class="col-md-6 col-6 pad-10">
        <div class="form-group">
            <label class=""  for="cidade">Cidade</label>
            <select class="form-control" v-model="cidade" id="cliente_cidade" name="cidade">
                <option value="x" v-if="!estado" disabled>Selecione primeiro um estado</option>
                <option :value="cidade.id" v-for="cidade in cidades">{{ cidade.nome }}</option>
            </select>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: ['estados', 'banco'],
    data() {
        return {
            cep: '',
            carregando: false,
            mensagem: 'Aguarde, por favor',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            rua: '',
            bairro: '',
            numero: '',
            complemento: '',
            estado: '',
            cidades: '',
            cidade: '',
            estado_id: '',
            cidade_id: '',
            erro: false,
        }
    },
    methods: {
        buscaCEP() {               
            var that = this;
            this.erro = false;
            if(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cep)) {
                that.carregando = true;
                that.mensagem = 'Aguarde... Buscando CEP.';

                axios.get('https://viacep.com.br/ws/' + this.cep.replace(/\D/g,'') + "/json/", 
                {
                    transformRequest: [function (data, headers) {
                        delete headers['X-Socket-Id'];
                        return data;
                    }]
                    
                }).then(function(response) {
                    if(response.data.erro != true) {

                        that.rua = response.data.logradouro;
                        that.bairro = response.data.bairro;

                        console.log(response.data);
                        var filtrado = that.estados.filter(function(estado) {
                            return estado.sigla == response.data.uf;
                        });

                        if (that.estado == filtrado[0]) {
                            that.html = "<i class='fa fa-check fa-2x'></i>";
                            that.mensagem = 'Sucesso, endereço encontrado!';
                            that.carregando = false;
                        }
                        else
                        {
                            that.estado = filtrado[0].id;
                        }
                        console.log(that.estado);

                        that.ibge = response.data.ibge;

                        that.popularCidades();

                        $("#numero").focus();

                    } else {
                        that.rua = '';
                        that.estado = '';
                        that.bairro = '';
                        that.numero = '';
                        that.complemento = '';
                        that.cidade = '';
                        that.ibge = '';
                        that.erro = true;
                        that.mensagem = 'CEP inválido!';
                        that.carregando = false;
                        $("#cliente_cep").focus();
                    }

                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                if(!this.cep == '') {
                    that.rua = '';
                    that.estado = '';
                    that.bairro = '';
                    that.numero = '';
                    that.complemento = '';
                    that.cidade = '';
                    that.erro = true;
                    that.ibge = '';
                    $("#cliente_cep").focus();
                    that.mensagem = 'CEP inválido!';
                   // that.enderecos[key].erros.push('CEP inválido');
                   that.carregando = false;
               }

           }

       },

       popularCidades() {
        var that = this;
        this.cidade = '';
        console.log(this.estado);
        if(this.estado)
        {
            this.carregando = true;
            this.mensagem = 'Buscando cidades...';
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            axios.get('/estado/' + this.estado).then(function(response) {

                that.cidades = response.data;

                if(that.ibge) {
                    var filtrado = that.cidades.filter(function(cidade) {
                        return cidade.ibge == that.ibge;
                    });

                    that.cidade = filtrado[0].id;
                }

                
                that.carregando = false;

            });
        }
    },

    colocaCidade() {
       this.cidade_id = this.cidade ? this.cidade.id : '';
   }
},
mounted() {
    if(this.banco) {
        this.cep = this.banco.cep;
        this.rua = this.banco.rua;
        this.numero = this.banco.numero;
        this.complemento = this.banco.complemento;
        this.bairro = this.banco.bairro;
        this.estado = this.banco.cidade.estado.id;
        this.ibge = this.banco.cidade.ibge;
        this.popularCidades();

    }
}
}
</script>
