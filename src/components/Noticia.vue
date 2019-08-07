<template>
    <div>

      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

       <div>
            <h1 class="text-danger">{{new.title}}</h1>
            <p>{{new.body}}</p>
            
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
          new: [],
        }
    },
    created: function() {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
          this.new = res.data;
          this.loading = false;
        })
    }
}
</script>
