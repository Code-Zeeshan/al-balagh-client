import * as yup from "yup";

export const productSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    desc: yup.string().required("Description is required"),
    // img: yup.string().required("Title is required"),
    size: yup.string().required("Size is required"),
    color: yup.string().required("Color is required"),
    price: yup.number("Quantity is a number").positive("Price is a positive number").required("Price is required"),
    quantity: yup.number("Quantity is a number").positive("Quantity is a positive number").required("Quantity is required"),
});