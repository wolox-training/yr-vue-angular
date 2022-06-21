import { rulesFields } from "./RulesFieldsUsers";
const formFields = {
  email: {
    label: "Email",
    name: "email",
    type: "email",
  },

  last_name: {
    label: "Apellido",
    name: "last_name",
    type: "text",
  },

  name: {
    label: "Nombre",
    name: "first_name",
    type: "text",
  },

  password: {
    label: "Password",
    name: "password",
    type: "Password",
  },

  password_confirmation: {
    label: "Confirmación de Password",
    name: "password_confirmation",
    type: "Password",
  },
};

export const FIELDS_SIGNUP = {
  fields: [
    formFields.name,
    formFields.last_name,
    formFields.email,
    formFields.password,
    formFields.password_confirmation,
  ],
  rules: rulesFields,
};

export const FIELDS_LOGIN = {
  fields: [formFields.email, formFields.password],
  rules: { email: rulesFields.email, password: rulesFields.password },
};
