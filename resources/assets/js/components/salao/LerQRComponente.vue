 
<template>
	
	<qrcode-reader @decode="onDecode" :paused="paused">
    	<div class="decoded-content">{{ content }}</div>
	</qrcode-reader >
</template>

<script>
	
	
	export default {		
		  data () {
		    return {
		      paused:false,
		      content: ''
		    }
		  },
		  methods: {
		    onDecode (aux) {		      
		      this.content = aux;
		      this.paused = true;
		      window.location.href = aux;
		    }
		  }
}
</script>

<style scoped>
.decoded-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  background-color: rgba(0,0,0,.5);
}
</style>