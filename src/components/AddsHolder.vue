<template>
    <div>
        <p class="mt-5 text-secondary">Adds</p>
        <div class="text-center" v-if="loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="mt-2" v-else>
            <div v-for="add in adds">
                <a :href="add.url" :title="add.title" target="_blank">
                    <img v-bind:src="add.thumbnailUrl" style="width: 150px;" class="d-block mb-3">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "AddsHolder",
    data(){
        return {
            loading:true,
            adds : []
        }
    },
    created: function() {
      axios
        .get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
        .then(res => {
          this.adds = res.data;
          this.loading = false;
        })
    }
}
/*
created: function() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
      this.todos = res.data;
    })
}
*/
</script>
