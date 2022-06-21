<template lang="pug">
.container
  img.logo-image(alt='Wolox Books Logo' src='../assets/logo_full_color.svg')
  form.form-container(@submit.prevent='handleAction')
    .input-container(
      v-for='(field, index) in fieldsArray'
      :key='`${index}-${field.id}`')      
        label.input-text-label(:for='field.id')
          | {{ field.label }}
        input.input-text-content(:id='field.id' :type='field.type' v-model='formData[field.id]')
    slot
</template>

<script>
export default {
  name: "FormComponent",
  props: {
    fieldsArray: { type: Array, default: () => [] },
    handleAction: { type: Function, default: () => null },
    formData: { type: Object, default: () => {} },
  },
};
</script>
