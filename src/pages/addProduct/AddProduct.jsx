import { Style } from "./AddProduct.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import productService from "../../services/product.service";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../validations/productValidation";

const AddProduct = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(productSchema),
    });
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const axiosPrivate = useAxiosPrivate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])


    const submitForm = async (data) => {
        try {
            const payload = {
                ...data,
                img
            };
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, payload[key]);
            }
            formData.append("img", img);
            const response = await axiosPrivate.axios.post("/products/addOne", formData);
            // setEmail('');
            // setPassword('');
            navigate("/products");
        } catch (err) {
            console.error("err", err);
        }
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>ADD PRODUCT</Style.Title>
                <Style.Form onSubmit={handleSubmit(submitForm)}>
                    <Style.Input
                        placeholder="title"
                        type="text"
                        id="title"
                        {...register("title")}

                    />
                    {errors.title && (
                        <Style.Error>{errors.title.message}</Style.Error>
                    )}
                    <Style.Input
                        placeholder="desc"
                        type="text"
                        id="desc"
                        {...register("desc")}

                    />
                    {errors.title && (
                        <Style.Error>{errors.title.message}</Style.Error>
                    )}

                    <Style.Input
                        placeholder="size"
                        type="text"
                        id="size"
                        {...register("size")}

                    />
                    {errors.desc && (
                        <Style.Error>{errors.desc.message}</Style.Error>
                    )}

                    <Style.Input
                        placeholder="color"
                        type="text"
                        id="color"
                        {...register("color")}

                    />
                    {errors.color && (
                        <Style.Error>{errors.color.message}</Style.Error>
                    )}

                    <Style.Input
                        placeholder="price"
                        type="number"
                        id="price"
                        {...register("price")}

                    />
                    {errors.price && (
                        <Style.Error>{errors.price.message}</Style.Error>
                    )}
                    <Style.Input
                        placeholder="quantity"
                        type="number"
                        id="quantity"
                        {...register("quantity")}

                    />
                    {errors.quantity && (
                        <Style.Error>{errors.quantity.message}</Style.Error>
                    )}
                    <Style.Input
                        placeholder="img"
                        type="file"
                        id="img"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                    <Style.Button>SAVE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default AddProduct;
