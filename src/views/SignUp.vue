<template lang="pug">
form-component(:fields='fieldsArray.fields' :rules='fieldsArray.rules' :handle-action='handleCreateUser')
  slot
    button.button.form-primary(type='submit')
      | Sign Up
    hr.line-form
    router-link.button.form-primary.form-links-primary(to='/login')
      | Login
</template>

<script>
import {ref} from 'vue';
import {FIELDS_SIGNUP} from '@/constants/Forms';
import FormComponent from '@/components/FormComponent';
import {signUp} from '@/services/UserService';

export default {
  name: 'SingUp',
  components: {FormComponent},

  setup() {
    const userNew = ref({});
    const handleCreateUser = async (value) => {
      let data = {
        first_name: value.firstName,
        last_name: value.lastName,
        email: value.email,
        password: value.password,
        password_confirmation: value.passwordConfirmation,
        locale: 'en',
      };
      await signUp(data);
    };

    return {userNew, fieldsArray: FIELDS_SIGNUP, handleCreateUser};
  },
};
</script>
