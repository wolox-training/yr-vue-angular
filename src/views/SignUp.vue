<template lang="pug">
form-component(:fields-array='fieldsArray' :handle-action='handleCreateUser' :form-data='userNew' )
  slot
    button.button.form-primary(type='submit')
      | Sign Up
    hr.line-form
    router-link.button.form-primary.form-links-primary(to='/login')
      | Login
</template>

<script>
import { ref } from "vue";
import { FIELDS_SIGNUP } from "@/constants/Forms";
import FormComponent from "@/components/FormComponent";

export default {
  name: "SingUp",
  components: { FormComponent },

  setup() {
    const userNew = ref({});
    const handleCreateUser = () => {
      console.log(userNew.value);
    };
    return { userNew, fieldsArray: FIELDS_SIGNUP, handleCreateUser };
  },
};
</script>
