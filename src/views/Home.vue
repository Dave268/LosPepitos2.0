<template>
  <div class="home">
    <h3>Derniers articles:</h3>
    <div class="scrolling-wrapper">
      <article-list></article-list>
      <article-list></article-list>
      <article-list></article-list>
    </div>
  </div>
</template>

<script>
import articleList from "../components/ArticleListItem";

export default {
  name: "Home",
  components: {
    articleList,
  },
};
</script>

<style lang="scss">
.home {
  top: 110px;
  padding: 25px 25px;
}

.scrolling-wrapper{
  display: flex;
  align-items: center;
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
