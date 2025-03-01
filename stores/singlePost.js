import { defineStore } from 'pinia'
import { useLoadingStore } from './loading';
export const singleItemList = defineStore('post', {
  state: () => ({ 
    post: []
   }),
  actions: {
    async getSinglePosts(id) {
      const loadingStore = useLoadingStore();
      try{
        loadingStore.startLoading();
        const response = await $fetch(`https://dummyjson.com/posts/${id}`);
        this.post=response;
      }catch(error){
        console.error(error);
      }finally{
        loadingStore.stopLoading();
      }
     
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemList, import.meta.hot))
}