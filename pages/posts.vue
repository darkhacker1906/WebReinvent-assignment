<template>
  <div>
    <div v-for="data in itemList.items" :key="data.id">
        {{data.name}}
    </div>
  </div>
</template>
<script setup>
const itemList = useItemList();
</script>