<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
      return {
        todos:[]
      }
    }
}
</script>
