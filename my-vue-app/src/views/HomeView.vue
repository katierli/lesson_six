<template>
  <div class="home">
    <h1>Welcome to Your Vue.js App</h1>
    <p>This is the home view of the application.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>