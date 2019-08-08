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
    props: {
        date: {
            type: String,
            required: false,
            default: 'today'
        }
    },
    data() {
        return {
          loading:true,
          noticia: [],
        }
    },
    created: function() {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
          this.noticia = res.data;
          this.loading = false;
        })
    }
}
</script>
