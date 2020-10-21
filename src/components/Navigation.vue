<template>
  <nav class="header">
    <div class="header__logo">
      <img
        src="../assets/images/logo/Logo_Pepitos_plongee_long.svg"
        alt="Logo de lospepitos.org"
        srcset="../assets/images/logo/Logo_Pepitos_plongee_long.svg"
      />
    </div>
    <div class="header__logo__circle"></div>
    <div class="header__menu-icon" v-on:click="displayMenu">
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
export default {
  methods: {
    displayMenu : function(){
      var x = document.getElementsByClassName("header__menu-content")[0];
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }
};
</script>

<style lang="scss">
.header {
  background-color: $lightColor;
  z-index: 1;
  width: 100%;
  height: 90px;
  padding: 10px 0;

  @include for-big-phone-only{
    height: 110px;
  }

  @include for-tablet-portrait-up {
      height: 120px;
    }

    @include for-tablet-landscape-up {
      height: 135px;
    }

    @include for-desktop-up {
      height: 160px;
    }


  &__logo {
    width: 35%;
    width: 200px;
    margin: auto 10px;
    position: absolute;
    top: 0px;
    left: 10px;
    z-index: 10;

    @include for-big-phone-only{
      width: 250px;
    }

    @include for-tablet-portrait-up {
      width: 300px;
    }

    @include for-tablet-landscape-up {
      width: 350px;
    }

    @include for-desktop-up {
      width: 400px;
    }

  }

  &__logo__circle {
    display: block;
    position: absolute;
    background-color: $lightColor;
    border-radius: 50%;
    width: 103px;
    height: 103px;
    left: 20px;
    top: 5px;
    z-index: 1;

    @include for-big-phone-only{
      width: 130px;
      height: 130px;
    }

     @include for-tablet-portrait-up {
      width: 159px;
      height: 159px;
    }

    @include for-tablet-landscape-up {
      width: 182px;
      height: 182px;
    }

    @include for-desktop-up {
      width: 208px;
      height: 208px;
    }
  }

  &__menu-icon {
    width: 20px;
    height: 19px;
    position: absolute;
    top: 48px;
    right: 20px;
    z-index: 2;

    @include for-big-phone-only{
      top: 65px;
    }

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

&__menu-content {
  background: $lightColor;
  display: block;
  position: absolute;
  width: 100%;
  top: 90px;
  z-index: 9;
  

    @include for-big-phone-only{
    top: 110px;
  }

  @include for-tablet-portrait-up {
      top: 120px;
    }
  }
  &__menu-list{
    margin-left: 15%; 
    font-size: 15px;
    &-item{
      list-style-type: none;
      padding: 15px 0;

      img{
        margin-right: 15px
      }
    }
  }
}



</style>
