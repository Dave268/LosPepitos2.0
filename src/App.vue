<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view />
  </div>
</template>

<script>
import appNavigation from "./components/Navigation";

export default {
  components: {
    appNavigation
  }
};
</script>

<style lang="postcss">
</style>
