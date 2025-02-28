import { defineStore } from 'pinia'
export const useItemList = defineStore('items', {
  state: () => ({ 
    items: [{name:"product",id:"1"}]
   }),
  actions: {
    getItems() {
      console.log("get Items")
    },
  },
})