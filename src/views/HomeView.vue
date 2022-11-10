<template>
<div class="home">
  <div v-if="error">
  {{error}}
</div>
<div v-if="posts.length>0">
  <PostsLitst :posts="posts"></PostsLitst>
</div>
<div v-else>
 <Spinner></Spinner>
</div>
</div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsLitst from '../components/PostsLitst'
import { computed, ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts'



export default {
  components: {
    Spinner, PostsLitst },
 
  setup(){
    // destructing & composable
    let {posts,error,load} = getPosts()
    load();
    return {posts,error}
  }
}
</script>
<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
