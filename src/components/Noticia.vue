<template>
    <div>

      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

       <div>
            <h1 class="text-danger">{{noticia.title}}</h1>
            <p>{{noticia.body}}</p>

       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Noticia",
    data() {
        return {
          loading:true,
          noticia: [],
        }
    },
    created: function() {
      var not_id = this.$route.params.id
      axios
        .get("http://jsonplaceholder.typicode.com/posts/"+not_id)
        .then(res => {
          this.noticia = res.data;
          this.loading = false;
        })
    }
}
</script>
