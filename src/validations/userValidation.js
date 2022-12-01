import * as yup from "yup";

export const userScehma = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Not a valid email").required("Email is required"),
    contact: yup.number()
        // .positive()
        .integer()
        // .min(11, 'Must be exactly 11 digits')
        // .length(11, 'Must be exactly 11 digits')
        // .test('len', 'Must be exactly 11 characters', val => val.length === 11)
        .required("Contact is Required"),
    city: yup.string().required("City is required"),
    address: yup.string().required("Address is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "The password must be six characters")
        .max(14, "The password must be max 14 characters"),
    confirmPassword: yup
        .string()
        .required("Password is required")
        .min(6, "The password must be 6 characters")
        .max(14, "The password must be max 14 characters")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
});