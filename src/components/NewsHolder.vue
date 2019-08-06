<template>
    <div>

      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

       <div v-else class="news-holder" v-for="(newsContent, index) in news">
            <h1 class="text-danger">{{newsContent.title}}</h1>
            <p>{{newsContent.body}}</p>
            <button type="button" class="btn btn-outline-primary btn-sm" v-on:click="readNews(index + 1)">Read</button>
            <div style="border: 1px dashed;" class="mt-2"></div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "NewsHolder",
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
          news: [],
        }
    },
    methods: {
        readNews(newsNum){
            this.$emit('read', newsNum);
        }
    },
    created: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          this.news = res.data;
          this.loading = false;
        })
    }
}
</script>
