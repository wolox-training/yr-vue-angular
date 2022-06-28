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
import { ref } from 'vue';
import { FIELDS_LOGIN } from '@/constants/Forms';
import FormComponent from '@/components/FormComponent';
import { signIn } from '@/services/UserService';
import { userToken } from '@/utils/session';

export default {
  name: 'LogIn',
  components: { FormComponent },

  setup() {
    const userData = ref({});
    const handleLogin = (value) => {
      signIn(value)
        .then((res) => {
          const token = res.headers['access-token'];
          if (token) {
            const { client, uid } = res.headers;
            const infoUser = {
              'Access-Token': token,
              Client: client,
              Uid: uid,
            };
            userToken(infoUser);
          }
        })
        .catch((error) => console.log(error));
    };

    return { userData, fieldsArray: FIELDS_LOGIN, handleLogin };
  },
};
</script>
