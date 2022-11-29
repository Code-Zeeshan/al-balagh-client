import * as yup from "yup";

export const userScehma = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min().max().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    // phoneNumber: yup.string().phone()
});