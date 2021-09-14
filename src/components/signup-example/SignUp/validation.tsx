import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string()
        .email("Please enter an valid email.")
        .required("* Required."),
    password: yup.string()
        .min(3, "Password should contains 3 character.")
        .required("* Required."),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], "Password fields not match.")
        .required("* Required.")
  });

export default validations
