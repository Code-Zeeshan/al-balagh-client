import { Style } from "./Login.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginScehma } from "../../validations/loginValidation";


const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginScehma),
    });
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            const response = await authService.login(
                data
            );
            // setEmail('');
            // setPassword('');
            const accessToken = response.data.accessToken;
            if (accessToken) {
                const role = response.data.role;
                setAuth({ ...data, role, accessToken });
                navigate("/products");
            }
        } catch (err) {
            console.error("err", err);
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Username or Password');
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized');
            // } else {
            //     setErrMsg('Login Failed');
            // }
            // errRef.current.focus();
        }
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>SIGN IN</Style.Title>
                <Style.Form onSubmit={handleSubmit(submitForm)}>

                    <Style.Input placeholder="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <Style.Error>{errors.email.message}</Style.Error>
                    )}

                    <Style.Input placeholder="password"
                        type="password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <Style.Error>{errors.password.message}</Style.Error>
                    )}
                    <Style.Button>LOGIN</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Login;
