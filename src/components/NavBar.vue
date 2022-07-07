<template lang="pug">
.navbar
  img.navbar-logo(alt='Wolox Books Logo' :src='logoImg')
  .navbar-options 
    Cart
    button.logout(@click='handleLogOut' type='button')
      | Logout
    div
      select.select(v-model='$i18n.locale')
        option(v-for='(lang, i) in langs' :key='i' :value='lang.value')
          | {{ lang.text }}

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
    const langs = [
      { value: 'en', text: 'English' },
      { value: 'es', text: 'Spanish' },
    ];

    const handleLogOut = () => signOff();

    return { logoImg, handleLogOut, langs };
  },
};
</script>
