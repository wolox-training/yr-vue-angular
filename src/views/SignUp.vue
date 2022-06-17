<template lang="pug">
.container
  img.logo-image(alt='Wolox Books Logo' src='../assets/logo_full_color.svg')
  form.form-container(@submit.prevent='handleCreateUser')
    .input-container(
      v-for='(field, index) in fieldsArray'
      :key='`${index}-${field.id}`')      
        label.input-text-label(:for='field.id')
          | {{ field.label }}
        input.input-text-content(:id='field.id' v-model='userNew[field.id]')
    button.button.form-primary(type='submit')
      | Sign Up
    hr.line-form
    router-link.button.form-primary.form-links-primary(to="/login")
      | Login
</template>

<script>
import { ref } from "vue";
import { FIELDS_SIGNUP } from "@/constants/Forms";

export default {
  name: "SingUp",
  setup() {
    const userNew = ref({});

    const handleCreateUser = () => {
      console.log(userNew.value);
    };
    return { userNew, fieldsArray: FIELDS_SIGNUP, handleCreateUser };
  },
};
</script>
