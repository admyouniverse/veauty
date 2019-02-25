<template>
    <div>
        <section class="slice slice-xl pb-10 bg-secondary gradiente">
            <div class="container d-flex align-items-end px-10 pt-md pt-lg-0">
                <div class="col">
                    <div class="row align-items-center justify-content-around">
                        <div class="col-lg-12 text-center">
                            <h1 class="text-center">O que você procura?</h1>
                            <p class="lead mt-4">Preencha de acordo com sua necessidade. Vamos encontrar o melhor resultado para você!</p>
                            <div class="mt-5">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4">
                                        <div class="form-group bg-white rounded px-2 py-2 shadow shadow-pink">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="input-group input-group-transparent">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text border-0"><i class="fas fa-map-marker"></i></span>
                                                        </div>
                                                        <autocomplete autocomplete="new-cidade" url="/listCidades" anchor="nome" label="estado.nome" name="servico" placeholder="Cidade" className="form-control border-0 shadow-none" :on-select="getCidade" id="cidade" :inicio="$store.state.cidade.completo">
                                                        </autocomplete>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group bg-white rounded px-2 py-2 shadow shadow-pink">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="input-group input-group-transparent">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text border-0"><i class="fas fa-clipboard-list"></i></span>
                                                        </div>
                                                        <autocomplete url="/listServicos" anchor="nome" label="writer" name="servico" placeholder="Serviço" className="form-control border-0 shadow-none" :on-select="getData" id="servico">
                                                        </autocomplete>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group bg-white rounded px-2 py-2 shadow shadow-pink">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="input-group input-group-transparent">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text border-0"><i class="fas fa-store"></i></span>
                                                        </div>
                                                        <autocomplete url="/listSaloes" anchor="nome" label="writer" name="servico" placeholder="Salão" className="form-control border-0 shadow-none" :on-select="getSalao" id="salao">
                                                        </autocomplete>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-center pb-sm link-header">
                                        <!--<a href="#"><i class="fa fa-search-plus"></i> Realizar uma busca avançada</a>-->
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="mt-2 mb-5">
                                            <a href="#" class="btn btn-primary btn-block btn-circle btn-translate--hover mr-4" v-on:click='buscar'>Buscar</a>
                                            <a href="#" class="btn d-none d-lg-inline-block">Limpar Filtros</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='map'>
            <GmapMap ref="gmap" :center="center" :zoom="16" map-type-id="terrain" style="width:100%;  height: 600px;">
                <GmapMarker :key="index" v-for="(m, index) in $store.state.markers" :position="m.position" :clickable="true" @click="openSalao(m)" @mouseover="statusText = m.text" @mouseout="statusText = null" />
                <div slot="visible">
                    <div style="bottom: 0; left: 0; background-color: #0000FF; color: white; position: absolute; z-index: 100">
                        {{statusText}}
                    </div>
                </div>
            </GmapMap>
        </section>
    </div>
</template>
<script>
export default {
    props: ['salaodb', 'cidadedb'],
    name: "GoogleMap",
    data() {
        return {
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            statusText: '',
            servico: '',
            busca: false,
            search: {
                nome: '',
                bairro: '',
                servico: '',
            },
            location: '',
            cidades: '',
        }
    },
    methods: {
        getData: function(obj) {
            this.search.servico = obj.id;
        },
        getCidade: function(obj) {
            this.$store.state.cidade.cidade = obj.nome;
            this.$store.state.cidade.id = obj.id;
            this.$store.state.cidade.estado = obj.estado.sigla;
            this.$store.state.cidade.completo = obj.nome + '/' + obj.estado.sigla;
        },
        getSalao: function(obj) {
            console.log(obj);
        },
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        },
        openSalao: function(salao) {
            this.$store.state.showSaloes = false;
            this.$store.dispatch("setSalao", salao.salao);
            let that = this;
            setTimeout(() => {
                that.scrollTo('#detalhesSalao');
            }, 100);
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.center = this.location;
                var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=pt-BR&key=AIzaSyByWD1uKbBef8Q3LhJRBHXHIiHtKitZPvQ';
                let that = this;
                $.getJSON(GEOCODING).done(function(location) {
                    that.$store.commit('setCidade', location);
                    axios.post('/getCidade', { nome: that.$store.state.cidade.cidade, sigla: that.$store.state.cidade.estado })
                        .then(response => {
                            that.$store.state.cidade.id = response.data.id;
                        })
                        .catch(error => console.log(error));
                });

            });
        },
        buscar: function() {
            this.busca = true;
            axios.post('/buscar', { nome: this.search.nome, bairro: this.search.bairro, servico: this.search.servico, location: this.location, cidade: this.$store.state.cidade.cidade, estado: this.$store.state.cidade.estado, cidade_id: this.$store.state.cidade.id })
                .then(response => {
                    this.$store.commit("setSaloes", response.data);
                    this.search = {
                        nome: '',
                        bairro: '',
                        servico: '',
                    };
                    this.scrollTo('#map');
                })
                .catch(error => console.log(error));
        },
        scrollTo: function($el) {

            $('html,body').animate({ scrollTop: $($el).offset().top - 100 }, 'slow');
        },
    },
    watch: {
        '$store.state.saloes': function(val) {
            this.$store.commit("setMarkers", []);
            this.$refs.gmap.$mapPromise.then((map) => {
                let that = this;
                const bounds = new google.maps.LatLngBounds();
                $.each(this.$store.state.saloes, function(key, value) {
                    that.$store.dispatch("addMarkers", { position: { lat: parseFloat(value.latitude), lng: parseFloat(value.longitude) }, salao: value, text: value.nome });
                    bounds.extend(new google.maps.LatLng(parseFloat(value.latitude), parseFloat(value.longitude)))
                });
                if (this.busca) {
                    this.center = {
                        lat: bounds.getCenter().lat(),
                        lng: bounds.getCenter().lng()
                    };
                    this.busca = false;
                    map.fitBounds(bounds);
                }
                //map.panToBounds(bounds);
            });

        },
    },
    mounted() {
        console.log('Criar Mapa');
        this.geolocate();
        if (this.salaodb != 0) {
            this.$store.commit("setSaloes", this.salaodb);
        }
    },
    created() {
        if (this.cidadedb != 0) {
            this.$store.state.cidade.id = this.cidadedb.id;
            this.$store.state.cidade.cidade = this.cidadedb.nome;
            this.$store.state.cidade.estado = this.cidadedb.estado.sigla;
            this.$store.state.cidade.completo = this.cidadedb.nome + '/' + this.cidadedb.estado.sigla;
        }

    }
}

</script>
<style lang="scss">
    .shadow {
        &.shadow-pink {
            box-shadow: 0 0 1.25rem rgba(189, 128, 176, 0.2) !important;
            border: 0.0625rem solid rgba(0, 0, 0, 0.08);
        }
    }

    #map {
        margin-top: -150px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .vue-map {
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    .gradiente {
        background: linear-gradient(to bottom, #fafbfe 92%, #ffffff);
    }
</style>
