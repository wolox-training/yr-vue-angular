export const SIGN_UP_FIELDS = [
  {
    key: 'firstName',
    label: 'Nombre',
    type: 'text',
    errorMessage: 'El nombre es requerido',
  },
  {
    key: 'lastName',
    label: 'Apellido',
    type: 'text',
    errorMessage: 'El apellido es requerido',
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email',
    errorMessage: 'El email es requerido y debe ser válido',
  },
  {
    key: 'password',
    label: 'Password',
    type: 'password',
    errorMessage:
      'El password es requerido y debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 caracter',
  },
  {
    key: 'confirmPassword',
    label: 'Confirmación de Password',
    type: 'password',
    errorMessage: 'La confirmación debe coincidir con el password',
  },
];
