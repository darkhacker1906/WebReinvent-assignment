<template>
<div>

<div class="mt-16 p-4 overflow-y-auto">
    <div class="flex flex-wrap gap-4 justify-center cursor-pointer">
      <div 
        v-for="data in posts" 
        :key="data.id" 
        class="w-80 bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between" @click="singlePostDetils(data.id)">
        
        <h2 class="text-lg font-bold text-gray-800">{{ data.title }}</h2>
        <p class="text-gray-600 mt-2 line-clamp-4">{{ data.body }}</p>
        
        <div class="mt-3">
          <span 
            v-for="tag in data.tags" 
            :key="tag" 
            class="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2">
            #{{ tag }}
          </span>
        </div>
        
        <div class="flex justify-between items-center mt-3 text-gray-700 text-sm">
          <p>Views: {{ data.views }}</p>
          <div class="flex gap-2">
            <span class="text-green-600">&#x1F44D; {{ data.reactions.likes }}</span>
            <span class="text-red-600">&#x1F44E; {{ data.reactions.dislikes }}</span>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

</template>
<script>
import navbar from '~/components/navbar.vue';
import { useItemList } from '~/stores/itemList'

export default {
  components: { navbar },
  data() {
    return {
      itemList: useItemList() 
    }
  },
  created() {
    this.itemList.getPosts(); 
  },
  computed:{
    posts(){
        console.log(this.itemList.items);
        return this.itemList.items;
    }
  },
  method:{
   singlePostDetils(id){
    console.log(id,"ids======");
    this.$router.push({name: '/posts', params: {id: id}});
   }
  }
}
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
