import { Style } from "./Register.styled";
import authService from "../../services/auth.service";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userScehma } from "../../validations/userValidation";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userScehma),
    });
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    // const [password, setPassword] = useState("");
    const goToProducts = () => {
        navigate("/products");
    }

    const submitForm = (data) => {
        // console.log("ran", data);
        if (data.name &&
            data.email &&
            data.contact &&
            data.password &&
            data.address &&
            data.city
        ) {
            const response = authService.register(data);
            goToProducts();
        }
    };

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>CREATE AN ACCOUNT</Style.Title>
                <Style.Form onSubmit={handleSubmit(submitForm)}>
                    <Style.Input placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        {...register("name")}
                    />
                    {errors.name && (
                        <Style.Error>{errors.name.message}</Style.Error>
                    )}

                    <Style.Input placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        {...register("email")}
                    />
                    {errors.email && (
                        <Style.Error>{errors.email.message}</Style.Error>
                    )}

                    <Style.Input placeholder="Contact"
                        onChange={(e) => setContact(e.target.value)}
                        {...register("contact")}
                    />
                    {errors.contact && (
                        <Style.Error>{errors.contact.message}</Style.Error>
                    )}

                    <Style.Input placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        {...register("address")}
                    />
                    {errors.address && (
                        <Style.Error>{errors.address.message}</Style.Error>
                    )}
                    <Style.Input placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        {...register("city")}
                    />
                    {errors.city && (
                        <Style.Error>{errors.city.message}</Style.Error>
                    )}

                    <Style.Input placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        {...register("password")}
                    />
                    {errors.password && (
                        <Style.Error>{errors.password.message}</Style.Error>
                    )}

                    <Style.Input placeholder="confirm password"
                        type="password"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <Style.Error>{errors.confirmPassword.message}</Style.Error>
                    )}

                    <Style.Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Style.Agreement>
                    <Style.Button>CREATE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Register;
