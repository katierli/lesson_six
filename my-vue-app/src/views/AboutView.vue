<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page of our Vue application.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>

<style scoped>
.about {
  padding: 20px;
}
</style>