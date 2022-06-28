<template lang="pug">
.navbar
  img.navbar-logo(alt='Wolox Books Logo' :src='logoImg')
  button.logout(@click='handleLogOut' type='button')
    | Logout
</template>

<script>
import { inject } from "vue";
import { signOff } from "@/utils/session";

export default {
  setup() {
    const logoImg = inject("logoImg");
    const handleLogOut = () => signOff();

    return { logoImg, handleLogOut };
  },
};
</script>
