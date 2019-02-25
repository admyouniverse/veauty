<template>
	<span class="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
	    <span class="btn-inner--icon"><i class="fas fa-coins plus-green"></i></span>
	    <span class="btn-inner--text">{{$store.state.pontos}} pts</span>
	</span>
	
</template>

<script>
	export default {
		props:['pontos'],
		data() {
			return {
				
			}
		},	
		methods: {
            
	   },
	   mounted() {
	   	console.log(this.pontos);
	   	this.$store.commit("setPontos", this.pontos);
	   }
	}
</script>
