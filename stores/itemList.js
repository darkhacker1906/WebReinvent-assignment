import { defineStore } from 'pinia'
export const useItemList = defineStore('items', {
  state: () => ({ 
    items: []
   }),
  actions: {
    async getPosts() {
      const response = await $fetch('https://dummyjson.com/posts');
      this.items=response.posts;
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemList, import.meta.hot))
}