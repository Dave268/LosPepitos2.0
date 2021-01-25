<template>
  <div class="instagram">
    <h1 class="footer__title">Instagram</h1>
    <p class="invert-text">
      Venez nous soutenir sur notre page facebook, comme cela vous resterez
      informé de nos derniers avancements.
    </p>
    <div class="footer__instagram-icon">
      <a :href="instagramLink"
        ><font-awesome-icon :icon="['fab', 'instagram-square']" size="6x"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { instagramLink: "https://www.facebook.com/LosPepitos.org" };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 30px 0;
  color: $lightColor;
  font-family: "papyrus";
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  line-height: 1rem;
  // text-align: center;
}

.footer__instagram-icon {
  text-align: center;

  a {
    color: $lightColor;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
