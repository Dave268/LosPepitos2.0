<template>
  <div class="home">
    <div class="lastArticles">
      <h3>Derniers articles:</h3>
      </div>
    
    <div class="scrolling-wrapper"  v-touch:swipe="swipeHandler">
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
  }
};
</script>

<style lang="scss">
.home {
  top: 110px;
  padding: 10px 0 0 0 ;
  max-width: 100vw;
  margin-bottom: 70px;
}

.scrolling-wrapper{
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scrollbar-width: none;
}
.lastArticles {
  padding-left: 25px;
}
</style>
