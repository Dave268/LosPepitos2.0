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
        <!-- <li v-for="(item,index) in menuData" :key="index" class="header__menu-list-item">
          <font-awesome-icon v-bind:icon="item.icon" /> {{ item.name }} 
          <font-awesome-icon icon="chevron-right" /> 
        </li> -->
        <app-menu-item v-for="(item,index) in menuData" :key="index" :model="item"></app-menu-item>
        
      </ul>
    </div>
  </nav>
</template>

<script>
// import appMenuItem from "./MenuItem";

export default {
  data(){
    return {
      menuData: 
        [
          {
            name: 'Home',
            icon: 'home'
            },
          {
            name: 'Nous',
            icon: 'smile-beam'
            },
          {
            name: 'Notre Projet Ecolo',
            icon: 'leaf'
            },
          {
            name: 'Notre Journal de Voyage',
            icon: 'paper-plane',
            children: [
              {
                name: 'Asie',
                children: [
                  {
                    name: 'Thailande'
                  },
                  {
                    name: 'Birmanie'
                  },
                  {
                    name: 'Thailande 2'
                  },
                  {
                    name: 'Cambodge'
                  },
                  {
                    name: 'Vietnam'
                  },
                  {
                    name: 'Malaisie'
                  }
                ]
              },
              {
                name: 'Amérique',
                children: [
                  {
                    name: 'PCT'
                  },
                  {
                    name: 'CDT'
                  }
                  ]
              }
            ]
            },
          {
            name: 'Nos Petites Perles',
            icon: 'theater-masks'
            },
          {
            name: 'Photos',
            icon: 'images'
            },
          {
            name: 'Contact',
            icon: 'envelope'
            }
        ]
      
    }
  },
  methods: {
    displayMenu : function(){
      document.querySelector('.header__menu-content').classList.toggle('header__menu-content--is-visible');
      document.querySelector(".header__menu-icon").classList.toggle('header__menu-icon--close-x');
    },
  },
 components: {
      appMenuItem: () => import('./MenuItem.vue')
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
    z-index: 9;

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

    &:hover{
      cursor: pointer;
    }

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
      transition: transform 0.5s ease-out;
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
      transition: all 0.5s ease-out;
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
      transition: transform 0.5s ease-out;
    }

    

    @include for-tablet-portrait-up {
      display: none;
    }
  }
  &__menu-icon--close-x {
        &::before {
            transform: rotate(45deg) scaleX(1.25);
        }

        .header__menu-icon__middle {
            opacity: 0;
            transform: scaleX(0);
        }

        &::after {
            transform: rotate(-45deg) scaleX(1.25) translateY(1px);
        }
    }
&__menu-content {
  user-select: none;
  background: $lightColor;
  opacity: 0.95;
  height: 0%;
  display: block;
  position: absolute;
  width: 100%;
  top: 90px;
  overflow-y: hidden;
  z-index: 8;
  transition: height .5s ease-in-out;
  

    @include for-big-phone-only{
    top: 110px;
  }

  @include for-tablet-portrait-up {
      top: 120px;
    }
  }

  &__menu-list{
    font-size: 15px;
    width: 100%;
    padding: 0;
    opacity: .8;
    a { text-decoration: none;}

    &-item{
      list-style-type: none;
      padding: 15px 20%;
      width: 100%;
      color: $darkColor;
      transition: all 1s;
        

      svg{
        margin-right: 15px
      }

      &:active {
          background: $darkColor;
          color: $lightColor;
          
          
        }
        &--is-visible{
      display: block;
    }
    }
  }

  &__menu-content--is-visible {
    height: 100%;
  }

  &__menu-sub-menu{
    display: none;

    &--is-visible{
      display: block;
    }
  }
}
</style>
