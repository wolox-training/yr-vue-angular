<template lang="pug">
.navbar
  img.navbar-logo(alt='Wolox Books Logo' :src='logoImg')
  .navbar-options 
    Cart
    button.logout(@click='handleLogOut' type='button')
      | Logout
</template>

<script>
import { inject } from 'vue';
import { signOff } from '@/utils/session';
import Cart from '@/components/Cart';

export default {
  name: 'NavBar',
  components: {
    Cart,
  },

  setup() {
    const logoImg = inject('logoImg');

    const handleLogOut = () => signOff();

    return { logoImg, handleLogOut };
  },
};
</script>
