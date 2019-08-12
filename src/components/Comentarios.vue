<template>
    <div>

      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div v-else class="media mb-4" v-for="comentario in comentarios">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
          <div class="media-body">
            <h5 class="mt-0">{{comentario.name}}</h5>
            {{comentario.body}}
          </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Comentarios",
    props: {
        idNoticia: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
          loading:true,
          comentarios: [],
        }
    },
    created: function() {
      console.log(this.idNoticia);
      axios
        .get("http://jsonplaceholder.typicode.com/comments?postId="+this.idNoticia)
        .then(res => {
          this.comentarios = res.data;
          this.loading = false;
        })
    }
}
</script>
