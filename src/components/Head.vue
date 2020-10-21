<template>
  <div class="sunset">
    <div class="sunset__caption">
      « The world is a book and those who do not travel read only one page...»
      (Saint-Augustine)
    </div>
    <picture>
      <source
        media="(min-width: 1280px)"
        srcset="
          ../assets/images/coucher_soleil_full_large.jpg       1920w,
          ../assets/images/coucher_soleil_full_large_hidpi.jpg 3840w
        "
      />
      <source
        media="(min-width: 800px)"
        srcset="
          ../assets/images/coucher_soleil_full_medium.jpg       1280w,
          ../assets/images/coucher_soleil_full_medium_hidpi.jpg 2560w
        "
      />
      <source
        media="(min-width: 480px)"
        srcset="
          ../assets/images/coucher_soleil_full_small.jpg         800w,
          ../assets/images/coucher_soleil_full_medium_hidpi.jpg 1600w
        "
      />
      <img
        class="sunset__image"
        alt="Coucher de Soleil sur Bagan"
        srcset="
          ../assets/images/coucher_soleil_full_smaller.jpg       480w,
          ../assets/images/coucher_soleil_full_smaller_hidpi.jpg 960w
        "
      />
    </picture>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sunset {
  position: relative;
  // top: 110px;
}
.sunset__caption {
  color: $lightColor;
  position: absolute;
  display: inline-block;
  margin: 0 5%;
  bottom: 35px;
  text-align: center;
  font-family: "papyrus";
  letter-spacing: 0.2rem;
  font-size: 14px;
  line-height: 1.2rem;
}
</style>
