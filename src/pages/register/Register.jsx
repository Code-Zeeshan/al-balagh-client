import { Style } from "./Register.styled";
import authService from "../../services/auth.service";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [password, setPassword] = useState("");
    const goToProducts = () => {
        navigate("/products");
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await authService.register({ name, email, password });
        goToProducts();
    };

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>CREATE AN ACCOUNT</Style.Title>
                <Style.Form>
                    <Style.Input placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* <Style.Input placeholder="last name" /> */}
                    {/* <Style.Input placeholder="username" /> */}
                    <Style.Input placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Style.Input placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Style.Input placeholder="confirm password" />
                    <Style.Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Style.Agreement>
                    <Style.Button onClick={(e)=> handleClick(e)}>CREATE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Register;
