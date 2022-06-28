<template>
  <router-view />
</template>
<script>
import {provide} from 'vue';
export default {
  setup() {
    const logoImg = require('@/assets/logo_full_color.svg');
    provide('logoImg', logoImg);
  },
};
</script>
