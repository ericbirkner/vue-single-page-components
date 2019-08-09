<template>
<div>
<div class="row">

    <div class="col-12"><h1 class="text-center mb-3">Web con single page components</h1></div>

    <div class="col-md-9 col-12">
       <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Cargando...</span>
        </div>
       </div>

       <div v-else class="news-holder" v-for="(newsContent, index) in displayedPosts">
            <h2 class="capitalize">{{newsContent.title}}</h2>
            <p>{{newsContent.body}}</p>
            <router-link :to="{ name: 'noticia', params: { id: newsContent.id } }" class="btn btn-link">Leer más</router-link>
            <div style="border: 1px dashed;" class="mt-2"></div>
       </div>

       <div class="clearfix btn-group col-md-2 offset-md-5 m-4">
           <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
           <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
           <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
         </div>

    </div>


    <div class="col-md-2 d-sm-none d-md-block">
        <links-holder></links-holder>

        <adds-holder></adds-holder>
    </div>



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
    data() {
        return {
          loading:true,
          posts: [],
          baseUrl: 'https://jsonplaceholder.typicode.com/',
          page: 1,
          perPage: 9,
          pages: [],
        }
    },
    methods: {
        getPosts () {
            axios.get(this.baseUrl+'posts')
            .then(response => {
                this.posts = response.data;
                this.loading = false;
            })
            .catch(response => {
                console.log(response);
            });
        },
        setPages () {
            let numberOfPages = Math.ceil(this.posts.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (posts) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  posts.slice(from, to);
        },
    },
    computed: {
        displayedPosts () {
            return this.paginate(this.posts);
        }
    },
    watch: {
        posts () {
            this.setPages();
        }
    },
    created: function() {
      this.getPosts();
      /*
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          this.news = res.data;
          this.loading = false;
        })
      */
    }
}
</script>

<style>
h2{
  color:gray;
}
</style>
