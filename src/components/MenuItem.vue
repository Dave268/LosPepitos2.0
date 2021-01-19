<template>
    <div :class="[isFolder ? 'folder' : 'file']">
        <li  class="header__menu-list-item">
    <label
      :class="{'open': open}"
      @click="toggle">
      <font-awesome-icon v-bind:icon="model.icon" /> 
      {{ model.name }}
      <span v-if="isFolder"><font-awesome-icon icon="chevron-right" /> </span>
    </label>
        </li>
    <ul v-show="open" v-if="isFolder" :class="{'open': open}">
      <app-menu-item
        v-for="(submodel, index) in model.children"
        :key="index" 
        :model="submodel">
      </app-menu-item>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
    model: Object
  },
  data: function() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
  components: {
      appMenuItem: () => import('./MenuItem.vue')
  }
}
</script>