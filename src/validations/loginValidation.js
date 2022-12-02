import * as yup from "yup";

export const loginScehma = yup.object().shape({
    email: yup.string().email("Not a valid email").required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "The password must be 8 characters")
        .max(14, "The password must be max 14 characters"),
});