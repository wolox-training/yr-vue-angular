<template lang="pug">
form-component(:fields='fieldsArray.fields' :rules='fieldsArray.rules' :handle-action='handleLogin')
  slot
    button.button.form-primary(type='submit')
      | Login
    hr.line-form
    router-link.button.form-primary.form-links-primary(to='/sign-up')
      | Sign Up
</template>

<script>
import {ref} from 'vue';
import {FIELDS_LOGIN} from '@/constants/Forms';
import FormComponent from '@/components/FormComponent';
import {signIn} from '@/services/UserService';

export default {
  name: 'LogIn',
  components: {FormComponent},

  setup() {
    const userData = ref({});
    const handleLogin = async (value) => {
      await signIn(value);
    };

    return {userData, fieldsArray: FIELDS_LOGIN, handleLogin};
  },
};
</script>
