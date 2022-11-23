<template>
<div class="home">
  <div v-if="error">
  {{error}}
</div>
<div v-if="posts.length>0" class="layout">
  <div>
    <PostsLitst :posts="posts"></PostsLitst>
  </div>
  <div>
    <TagCloud></TagCloud>
  </div>
</div>
<div v-else>
 <Spinner></Spinner>
</div>
</div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsLitst from '../components/PostsLitst'
import { computed, ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts'



export default {
  components: {
    TagCloud,
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
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
}
</style>
