import { Style } from "./Login.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userScehma } from "../../validations/userValidation";


const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userScehma),
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
                // { email, password }
                data
            );
            // setEmail('');
            // setPassword('');
            const accessToken = response.data.accessToken;
            if (accessToken) {
                const role = response.data.role;
                setAuth({ email, password, role, accessToken });
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
                    <Style.Input
                        placeholder="email"
                        type="text"
                        id="email"
                        // autoComplete="off"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        {...register("email")}
                        // required
                    />
                    {errors.email && (
                        <Style.Error>{errors.email.message}</Style.Error>
                    )}
                    <Style.Input
                        placeholder="password"
                        type="password"
                        // id="password"
                        // onChange={(e) => setPassword(e.target.value)}
                        // value={password}
                        {...register("password")}
                        // required
                    />
                    {errors.password && (
                        <Style.Error>{errors.password.message}</Style.Error>
                    )}
                    <Style.Button>LOGIN</Style.Button>
                    {/* <Style.Link>DO NOT YOU REMEMBER THE PASSWORD?</Style.Link> */}
                    <Link to="/register"> CREATE A NEW ACCOUNT</Link>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Login;
