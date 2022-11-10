<template>
  <PostsLitst :posts="posts"></PostsLitst>
</template>

<script>
import PostsLitst from '../components/PostsLitst'
import { computed, ref } from '@vue/reactivity'



export default {
  components: { PostsLitst },
 
  setup(){
    let posts = ref([
     
    ])
    return {posts}
  }
}
</script>
<style>
.input{
  margin:20px auto;
  border-inline-color: #eee;
  }
</style>
