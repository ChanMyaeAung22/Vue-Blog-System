<template>
<div v-if="error">{{error}}</div>
<div v-if="posts">
  <PostsLitst :posts="filteredPosts"></PostsLitst>
</div>
<div v-else>
  loading...
</div>
</template>

<script>
import PostsLitst from '../components/PostsLitst'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: { PostsLitst },
    props:['tag'],
    setup(props){
      let {posts,error,load} = getPosts();
      load();
      let filteredPosts = computed(()=>{
        return posts.value.filter((post)=>{
          return post.tags.includes(props.tag)
        }) 
      })
      return {posts,error,filteredPosts};
    }
}
</script>

<style>

</style>