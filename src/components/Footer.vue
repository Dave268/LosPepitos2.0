<template>
  <div class="footer invert">
    <div class="footer__content">
      <transition mode="out-in">
        <component :is="selectedComp" v-if="showComp"></component>
      </transition>
    </div>
    <div class="footer__links">
      <div class="footer__social" @click="showSelectedComp('instagram')">
        <img src="../assets/images/icons/footer-instagram.svg" />
      </div>
      <div class="footer__social" @click="showSelectedComp('facebook')">
        <img src="../assets/images/icons/footer-facebook.svg" />
      </div>
      <div class="footer__social" @click="showSelectedComp('about')">
        <img src="../assets/images/icons/footer-presentation.svg" />
      </div>
      <div class="footer__social" @click="showSelectedComp('contact')">
        <img src="../assets/images/icons/footer-contact.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import contact from "./Contact";
import about from "./About";
import facebook from "./Facebook";
import instagram from "./Instagram";

export default {
  data: function () {
    return {
      showComp: false,
      selectedComp: "",
    };
  },
  methods: {
    showSelectedComp(comp) {
      if (comp == this.selectedComp && this.showComp) {
        this.toggleVue();
        document
          .querySelector(".footer")
          .classList.toggle("footer--full-height");
      } else if (comp !== this.selectedComp && this.showComp) {
        this.selectedComp = comp;
      } else if (comp !== this.selectedComp && !this.showComp) {
        this.selectedComp = comp;
        this.toggleVue();
        document
          .querySelector(".footer")
          .classList.toggle("footer--full-height");
      } else {
        this.toggleVue();
        document
          .querySelector(".footer")
          .classList.toggle("footer--full-height");
      }
    },
    toggleVue() {
      if (this.showComp) {
        this.showComp = false;
      } else {
        this.showComp = true;
      }
    },
  },
  components: {
    contact,
    about,
    facebook,
    instagram,
  },
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  height: 55px;
  width: 100vw;
  bottom: 0;
  margin-bottom: 0;
  z-index: 11;

  transition: all 0.6s;

  &--full-height {
    height: 100%;
  }
}
.footer__content {
  padding: 0 25px;
}
.footer__links {
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
  margin: 20px;
  cursor: pointer;
  user-select: none;
}

.footer__title {
  margin-bottom: 35px;
  margin-top: 35px;
  text-align: center;
}
</style>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s ease-in-out;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>
