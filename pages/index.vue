<template>
    <div>
       <div :style="{ backgroundImage: `url('/images/background.jpg')` }" class="bg-cover bg-center h-screen w-full relative">
         <div class="bg-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg shadow-lg rounded-lg p-10 text-center space-y-4 max-w-md">
        <h1 class="text-2xl font-semibold text-gray-800">Welcome to the page</h1>
        <p class="text-gray-700">Go to posts page</p>
        <button @click="$router.push('/posts')" class="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">
          Continue
        </button>
      </div>
    </div>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>