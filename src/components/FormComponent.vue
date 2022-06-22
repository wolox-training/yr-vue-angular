<template lang="pug">
.container
  img.logo-image(alt='Wolox Books Logo' src='../assets/logo_full_color.svg')
  form.form-container(@submit.prevent='handleValidate')
    .input-container(
      v-for='(field, index) in state'
      :class='{valid: !v$[field.name].$error , error: v$[field.name].$errors.length>0}' 
      :key='`${index}-${field.name}`')  
        label.input-text-label(:for='field.name')
          | {{ field.label }}
        input.input-text-content(
        :id='field.name' 
        :type='field.type' 
        v-model='state[field.name]'
        @input='returnValue(state[field.name],field.name)'
        @blur='v$[field.name].$touch')
        p(v-for='error of v$[field.name].$errors' :key='error.$uid')
          |{{ error.$message}}
    slot
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { ref, computed } from 'vue';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

export default {
  name: 'FormComponent',
  props: {
    fields: { type: Array, default: () => [] },
    rules: { type: String, default: '' },
    handleAction: { type: Function, default: () => null },
  },

  setup(props) {
    const state = ref(props.fields);
    const formData = ref({});
    const password = helpers.regex(/^[a-zA-Z]{3}/, /\d/);
    const rules = computed(() => {
      if (props.rules === 'signUp') {
        return {
          email: { required, email },
          first_name: { required, min: minLength(5) },
          last_name: { required },
          password: {
            required,
            pass: helpers.withMessage(
              'This field must contain characters and numbers',
              password
            ),
            min: minLength(5),
          },
          password_confirmation: { required, sameAs: sameAs(state.value.password) },
        };
      } else {
        return {
          email: { required, email },
          password: {
            required,
            pass: helpers.withMessage(
              'This field must contain characters and numbers',
              password
            ),
            min: minLength(5),
          },
        };
      }
    });

    const v$ = useVuelidate(rules, state);
    const handleValidate = async () => {
      if (!(await v$.value.$validate())) return;
      props.handleAction(formData.value);
    };
    const returnValue = (value, field) => {
      formData.value[field] = value;
    };

    return { v$, state, handleValidate, returnValue };
  },
};
</script>
