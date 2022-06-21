import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

const password = helpers.regex(/^[a-zA-Z]{3}/, /\d/);

export const rulesFields = {
  email: { required, email },
  first_name: { required, min: minLength(5) },
  last_name: { required },
  password: {
    required,
    pass: helpers.withMessage(
      "This field must contain characters and numbers",
      password
    ),
    min: minLength(5),
  },
  password_confirmation: { required, sameAsRawValue: sameAs("password") },
};
