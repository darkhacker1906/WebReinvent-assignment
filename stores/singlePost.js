import { defineStore } from 'pinia'
export const singleItemList = defineStore('post', {
  state: () => ({ 
    post: []
   }),
  actions: {
    async getSinglePosts(id) {
      const response = await $fetch(`https://dummyjson.com/posts/${id}`);
      this.post=response;
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemList, import.meta.hot))
}