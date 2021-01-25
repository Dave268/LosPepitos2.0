<template>
  <div class="facebook">
    <h1 class="footer__title">Facebook</h1>
    <p class="invert-text">
      Venez nous soutenir sur notre page facebook, comme cela vous resterez
      informé de nos derniers avancements.
    </p>
    <div class="footer__facebook-icon">
      <a :href="facebookLink"
        ><font-awesome-icon :icon="['fab', 'facebook-square']" size="6x"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { facebookLink: "https://www.facebook.com/LosPepitos.org" };
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

.footer__facebook-icon {
  text-align: center;

  a {
    color: $lightColor;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
