<template>
  <div class="footer">
    <div class="footer__social">
      <img src="../assets/images/icons/footer-instagram.svg" />
    </div>
    <div class="footer__social">
      <img src="../assets/images/icons/footer-facebook.svg" />
    </div>
    <div class="footer__social">
      <img src="../assets/images/icons/footer-presentation.svg" />
    </div>
    <div class="footer__social">
      <img src="../assets/images/icons/footer-contact.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 100vw;
  bottom: 0;
  margin-bottom: 0;
  background-color: $darkColor;
}
.footer__social {
  margin: 0 20px 0 20px;

  img {
    color: $lightColor;
  }
}
</style>
