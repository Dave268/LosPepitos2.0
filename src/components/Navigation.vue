<template>
  <nav class="header">
    <div class="header__logo">
      <img
        src="../assets/images/logo/Logo_LosPepitos_Completmdpi.png"
        alt="Logo de lospepitos.org"
        srcset="../assets/images/logo/Logo_LosPepitos_Complet.svg"
      />
    </div>
    <div class="header__menu-icon">
      <div class="header__menu-icon__middle"></div>
    </div>
    <div class="header__menu-content">
      <ul class="header__menu-list">
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-home.svg" />Home
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-nous.svg" />Nous
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-projet.svg" />Notre Projet Ecolo
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-journal.svg" />Journal de Voyage
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-perles.svg" />Nos Petites Perles
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-photos.svg" />Photos
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-contact.svg" />Contact
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background-color: $lightColor;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 110px;
  padding: 10px 0;

  &__logo {
    width: 35%;
    min-width: 200px;
    margin: auto 10px;
    position: relative;
    top: 15px;
    left: 10px;
  }

  &__menu-icon {
    width: 20px;
    height: 19px;
    position: absolute;
    top: 70px;
    right: 20px;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      height: 3px;
      width: 20px;
      background-color: $darkColor;
      border-radius: 3px;
      transform-origin: 0 0;
      transition: transform 0.3s ease-out;
    }
    &__middle {
      position: absolute;
      top: 8px;
      right: 0;
      z-index: 3;
      height: 3px;
      width: 12px;
      background-color: $darkColor;
      border-radius: 3px;
      transform-origin: 0 50%;
      transition: all 0.3s ease-out;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      height: 3px;
      width: 20px;
      background-color: $darkColor;
      border-radius: 3px;
      transform-origin: 0 100%;
      transition: transform 0.3s ease-out;
    }

    @include for-tablet-portrait-up {
      display: none;
    }
  }
}

.header__menu-content {
  display: none;
}
</style>
