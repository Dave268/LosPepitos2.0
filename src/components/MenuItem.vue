<template>
  <li class="header__menu-list-item" :class="[isFolder ? 'folder' : 'file']">
    <label :class="{ open: open }" @click="toggle">
      <font-awesome-icon v-bind:icon="model.icon" />
      {{ model.name }}
      <span class="chevron-icon" v-if="isFolder && !open"
        ><font-awesome-icon icon="chevron-right" />
      </span>
      <span class="chevron-icon" v-if="isFolder && open"
        ><font-awesome-icon icon="chevron-down" />
      </span>
    </label>

    <transition>
      <li v-show="open" v-if="isFolder" :class="{ open: open }">
        <app-menu-item
          v-for="(submodel, index) in model.children"
          :key="index"
          :model="submodel"
        >
        </app-menu-item>
      </li>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    model: Object,
  },
  data: function () {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
  components: {
    appMenuItem: () => import("./MenuItem.vue"),
  },
};
</script>

<style lang="scss" scoped>
.chevron-icon {
  display: inline-block;
  padding-left: 10px;
}
.v-enter,
.v-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s ease-in-out;
}
.v-enter-to,
.v-leave {
  transform: translateY(0);
  opacity: 1;
}
</style>
