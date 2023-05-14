import { Style } from "./AddAccessory.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userScehma } from "../../validations/userValidation";


const AddAccessory = () => {
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
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>ACCESSORIES</Style.Title>
                <Style.Form onSubmit={handleSubmit(submitForm)}>
                    <Style.Input
                        placeholder="Lenght(inches)"
                        type="text"
                        id="email"
                    // {...register("email")}
                    />
                    {/* {errors.email && (
                        <Style.Error>{errors.email.message}</Style.Error>
                    )} */}
                    <Style.Input
                        placeholder="Height(inches)"
                        type="text"
                    // {...register("password")}
                    />

                    <Style.Input
                        placeholder="Description"
                        type="text"
                    // {...register("password")}
                    />
                    {/* <label htmlFor="banadana">Banadana:</label> */}
                    <select name="banadana" id="">
                        <option value="">Banadana</option>
                        <option value="black">black</option>
                        <option value="gray">gray</option>
                        <option value="yellow">yellow</option>
                        <option value="silver">silver</option>
                        <option value="white">white</option>
                    </select>
                    <br />
                    {/* <label htmlFor="pearls">Pearls:</label> */}
                    <select name="pearls" id="">
                        <option value="">Pearls</option>
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="silver">silver</option>
                        <option value="white">white</option>
                    </select>
                    <br />

                    <Style.Button>SAVE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default AddAccessory;
