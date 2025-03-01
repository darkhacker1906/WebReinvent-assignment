<template>
 <div class="flex items-center justify-center  min-h-screen bg-gray-100">
  <div v-if="loading">
   <loader/>
  </div>
    <div  v-else class="bg-white shadow-lg rounded-lg p-6 w-[800px] flex flex-col hover:bg-slate-100">
      <h2 class="text-xl font-bold text-gray-800">{{ posts.title }}</h2>
      <p class="text-gray-600 mt-6">{{ posts.body }}</p>
      <div class="mt-10">
        <span v-for="tag in posts.tags" :key="tag" class="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">
          #{{ tag }}
        </span>
      </div>
      <div class="flex justify-between items-center mt-12 text-gray-600 text-sm">
        <div class="flex gap-2">
            <span class="text-green-600">&#x1F44D; {{ posts?.reactions?.likes }}</span>
            <span class="text-red-600">&#x1F44E; {{ posts?.reactions?.dislikes }}</span>
          </div>
        <div>
          <span class="font-bold">Views:</span> {{ posts.views }}
        </div>
        <div class="text-right text-gray-500 text-sm">
        <span class="font-bold">User ID:</span> {{ posts.userId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { singleItemList } from '~/stores/singlePost'
import loader from '~/components/loader.vue';
import { useLoadingStore } from '../../stores/loading';

export default {
  data() {
    return {
      post: singleItemList() 
    }
  },
  created() {
    const id = this.$route.params.id;
    this.post.getSinglePosts(id); 
  },
  computed:{
    posts(){
        return this.post.post;
    },
    loading(){
      return useLoadingStore().loading;
    }
  },
 
}
</script>

<style></style>