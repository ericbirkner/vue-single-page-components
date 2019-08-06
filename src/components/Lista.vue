<template>
  <div id="lista">
    <ul>
      <li v-for="(todo, index) in todos">
        <p>{{dato.title}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'lista',
  data () {
    return {
      todos: []
    }
  }
}
</script>

<style>

</style>
