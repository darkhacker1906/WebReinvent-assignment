import { defineStore } from 'pinia'
import { useLoadingStore } from './loading';

export const useItemList = defineStore('items', {
  state: () => ({ 
    items: []
   }),
  actions: {
    async getPosts() {
      const loadingStore = useLoadingStore();
      try{
        loadingStore.startLoading();
        const response = await $fetch('https://dummyjson.com/posts');
        this.items=response.posts;
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