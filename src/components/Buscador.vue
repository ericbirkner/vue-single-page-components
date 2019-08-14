<template>
    <div>
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input v-on:keyup="buscar" type="text" class="form-control" placeholder="Buscar">
      </div>

    </div>
</template>

<script>
export default {
    name: "Buscador",
  
    methods:{
      buscar(event){
        this.$parent.busqueda = event.target.value;
      }
    }
}
</script>
