<template>
  <div>
    
<navbar v-if="route.path !== '/'"/>
    <NuxtPage />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>

</style>
