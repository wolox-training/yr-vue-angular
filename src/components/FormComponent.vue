<template lang="pug">
.container
  img.logo-image(alt='Wolox Books Logo' src='../assets/logo_full_color.svg')
  form.form-container(@submit.prevent='handleValidate')
    .input-container(
      v-for='(field, index) in state'
      :class='{ valid: !v$[field.name].$error , error: v$[field.name].$errors.length>0 }' 
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
import useVuelidate from "@vuelidate/core";
import { ref } from "vue";

export default {
  name: "FormComponent",
  props: {
    fields: { type: Array, default: () => [] },
    rules: { type: Object, default: () => {} },
    handleAction: { type: Function, default: () => null },
  },

  setup(props) {
    const state = ref(props.fields);
    const v$ = useVuelidate(props.rules, state);
    const handleValidate = async () => {
      if (!(await v$.value.$validate())) return;
      props.handleAction(formData.value);
    };
    const formData = ref({});
    const returnValue = (value, field) => {
      formData.value[field] = value;
    };
    return { v$, state, handleValidate, returnValue };
  },
};
</script>
