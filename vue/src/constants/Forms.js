const formFields = {
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
  },

  lastName: {
    label: 'Apellido',
    name: 'lastName',
    type: 'text',
  },

  name: {
    label: 'Nombre',
    name: 'firstName',
    type: 'text',
  },

  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
  },

  passwordConfirmation: {
    label: 'Confirmación de Password',
    name: 'passwordConfirmation',
    type: 'password',
  },
};

export const FIELDS_SIGNUP = {
  fields: [
    formFields.name,
    formFields.lastName,
    formFields.email,
    formFields.password,
    formFields.passwordConfirmation,
  ],
  rules: 'signUp',
};

export const FIELDS_LOGIN = {
  fields: [formFields.email, formFields.password],
  rules: 'login',
};
