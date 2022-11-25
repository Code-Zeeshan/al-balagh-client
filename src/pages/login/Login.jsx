import { Style } from "./Login.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.login(
                { email, password }
            );
            setEmail('');
            setPassword('');
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
                <Style.Form>
                    <Style.Input
                        placeholder="email"
                        type="text"
                        id="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <Style.Input
                        placeholder="password"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <Style.Button onClick={(e) => handleSubmit(e)}>LOGIN</Style.Button>
                    <Style.Link>DO NOT YOU REMEMBER THE PASSWORD?</Style.Link>
                    <Style.Link>CREATE A NEW ACCOUNT</Style.Link>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Login;
