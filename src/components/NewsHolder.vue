<template>

<div class="row">
    <h1 class="text-center mb-5">Web con single page components</h1>
    <div class="col-md-9 col-12">
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

       <div v-else class="news-holder" v-for="(newsContent, index) in news">
            <h1 class="text-danger">{{newsContent.title}}</h1>
            <p>{{newsContent.body}}</p>
            <router-link :to="{ name: 'noticia', params: { id: newsContent.id } }">Leer más</router-link>
            <div style="border: 1px dashed;" class="mt-2"></div>
       </div>
    </div>
    <div class="col-md-2 d-sm-none d-md-block">
        <links-holder></links-holder>

        <adds-holder></adds-holder>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LinksHolder from "./LinksHolder";
import AddsHolder from "./AddsHolder";

export default {
    name: "NewsHolder",
    components: {AddsHolder, LinksHolder},
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
        .get("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(res => {
          this.news = res.data;
          this.loading = false;
        })
    }
}
</script>
