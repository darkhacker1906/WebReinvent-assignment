import { defineStore } from 'pinia';
import { useLoadingStore } from './loading';

export const useItemList = defineStore('items', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cachedItems')) || [], 
    fetchedAt: localStorage.getItem('fetchedAt') || null, 
  }),

  actions: {
    async getPosts() {
      const loadingStore = useLoadingStore();
      if (this.isCacheValid()) {
        return;
      }

      try {
        loadingStore.startLoading();
        const response = await $fetch('https://dummyjson.com/posts');
        this.items = response.posts;
        this.fetchedAt = Date.now();

        localStorage.setItem('cachedItems', JSON.stringify(this.items));
        localStorage.setItem('fetchedAt', this.fetchedAt);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        loadingStore.stopLoading();
      }
    },


    isCacheValid() {
      if (!this.fetchedAt) return false;
      const expirationTime = 15* 60 * 1000; 
      const isExpired = Date.now() - this.fetchedAt > expirationTime;
      if (isExpired) {
        localStorage.removeItem('cachedItems');
        localStorage.removeItem('fetchedAt');
        return false;
      }
      return true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemList, import.meta.hot));
}
