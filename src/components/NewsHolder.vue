<template>
<transition name="slide-fade">
<div class="row">

    <div class="col-12">
      <h1 class="text-center mb-3">Web con single page components</h1>

    </div>

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
           <router-link :to="`/noticias/page/${page-1}`" class="btn btn-sm btn-outline-secondary" v-if="page != 1"> << </router-link>

           <span v-for="pageNumber in pages.slice(page-1, page+5)">
           <router-link :to="`/noticias/page/${pageNumber}`" v-on:click="set_clase" class="btn btn-sm btn-outline-secondary"> {{pageNumber}} </router-link>
           </span>

           <router-link :to="`/noticias/page/${page+1}`" class="btn btn-sm btn-outline-secondary" v-if="page < pages.length"> >> </router-link>
         </div>

    </div>


    <div class="col-md-2 d-sm-none d-md-block">

        <buscador/>

        <links-holder></links-holder>

        <adds-holder></adds-holder>
    </div>



  </div>

</transition>

</template>

<script>
import axios from 'axios'
import LinksHolder from "./LinksHolder";
import AddsHolder from "./AddsHolder";
import Buscador from "./Buscador";

export default {
    name: "NewsHolder",
    components: {AddsHolder, LinksHolder,Buscador},
    data() {
        return {
          loading:true,
          posts: [],
          baseUrl: 'https://jsonplaceholder.typicode.com/',
          page: 1,
          perPage: 10,
          pages: [],
          busqueda:'',
          filtered:null
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
        setPages (total) {
            let numberOfPages = Math.ceil(total / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (posts) {
            let page = this.page;
            if(this.$route.params.page>0){
              //console.log(this.$route.params.page)
              page = this.$route.params.page;
            }
            this.page = parseInt(page);
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  posts.slice(from, to);
        },
        set_clase(event){
          console.log(event.target);
        }
    },
    computed: {
        displayedPosts () {
            let filtered = this.posts;
            if(this.busqueda.length>1){
              filtered = filtered.filter(post => {
                return post.title.includes(this.busqueda)
              })
            }
            this.setPages(filtered.length);
            return this.paginate(filtered)
        }
    },

    created: function() {
      this.getPosts();
    }
}
</script>

<style>
h2{
  color:gray;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

</style>
