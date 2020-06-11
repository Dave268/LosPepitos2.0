<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-Head></app-Head>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import appNavigation from "./components/Navigation";
import appHead from "./components/Head";
import appFooter from "./components/Footer";

export default {
  components: {
    appNavigation,
    appHead,
    appFooter
  }
};
</script>

<style lang="scss">
@import "normalize.scss";
@import "./assets/styles/base/_global.scss";
</style>
