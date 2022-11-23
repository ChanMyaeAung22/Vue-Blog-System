<template>
<div class="tag">
  <div v-if="error">{{error}}</div>
<div v-if="posts" class="layout">
  <div>
    <PostsLitst :posts="filteredPosts"></PostsLitst>
  </div>
  <div>
    <TagCloud></TagCloud>
  </div>
</div>
<div v-else>
  loading...
</div>
</div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsLitst from '../components/PostsLitst'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: {
    TagCloud, PostsLitst },
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
.tag{
  max-width: 1200px;
  margin:0 auto;
}
</style>