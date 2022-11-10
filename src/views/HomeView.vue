<template>
<div v-if="error">
  {{error}}
</div>
<div v-if="posts.length>0">
  <PostsLitst :posts="posts"></PostsLitst>
</div>
<div v-else>
  loading...
</div>
</template>

<script>
import PostsLitst from '../components/PostsLitst'
import { computed, ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts'



export default {
  components: { PostsLitst },
 
  setup(){
    // destructing & composable
    let {posts,error,load} = getPosts()
    load();
    return {posts,error}
  }
}
</script>
<style>
.input{
  margin:20px auto;
  border-inline-color: #eee;
  }
</style>
