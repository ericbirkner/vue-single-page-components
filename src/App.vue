<template>
  <div id="app" class="container">
        <h1 class="text-center mb-5">Web con single page components</h1>
        <div class="row">

            <div class="col-md-9 col-12">
                <news-holder v-on:read="newsRead" date="yesterday"></news-holder>
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
import NewsHolder from "./components/NewsHolder";
import LinksHolder from "./components/LinksHolder";
import AddsHolder from "./components/AddsHolder";

export default {
    name: 'app',
    components: {AddsHolder, LinksHolder, NewsHolder},
    data () {
      return {
        todos:[]
      }
    },
    methods:{
        newsRead(num){
            alert('You read news! Number is: ' + num)
        }
    }
}
</script>
