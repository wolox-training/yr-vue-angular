<template lang="pug">
form-component(:fieldsArray='fieldsArray' :handleAction='handleLogin' :formData='userData' )
  slot
    button.button.form-primary
      |  Login
    hr.line-form
    router-link.button.form-primary.form-links-primary(to="/sign-up")
      | Sign Up
</template>

<script>
import { ref } from "vue";
import { FIELDS_LOGIN } from "@/constants/Forms";
import FormComponent from "@/components/FormComponent";

export default {
  name: "LogIn",
  components: { FormComponent },

  setup() {
    const userData = ref({});
    const handleLogin = async () => {
      console.log(userData.value);
    };
    return { userData, fieldsArray: FIELDS_LOGIN, handleLogin };
  },
};
</script>
