import { Style } from "./UserProfile.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import productService from "../../services/product.service";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector, useDispatch } from "react-redux";
import { getCount } from "../../redux/cart/CartActions";
import useAuth from "../../hooks/useAuth";


const AddProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const axiosPrivate = useAxiosPrivate();

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])

    useEffect(() => {
        let isMounted = true;
        const getUser = async () => {
            try {
                const response = await axiosPrivate.axios.get("/users/findOne");
                if (Object.keys(response.data).length > 0) {
                    const {
                        name,
                        contact,
                        address,
                        city
                    } = response.data
                    console.log(response.data);
                    setAddress(address);
                    setCity(city);
                    setName(name);
                    setContact(contact);
                }
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getUser();
        return () => {
            isMounted = false;
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name,
                city,
                address,
                password,
                oldPassword,
                contact,
            };
            // const formData = new FormData();
            // for (const key in payload) {
            //     formData.append(key, payload[key]);
            // }
            const response = await axiosPrivate.axios.put("/users/updateOne", payload);
            // setEmail('');
            // setPassword('');
            // navigate("/products");
        } catch (err) {
            console.error("err", err);
        }
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Title>User Profile</Style.Title>
                <Style.Form>
                    <Style.Input
                        placeholder="Name"
                        type="text"
                        id="title"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />

                    <Style.Input
                        placeholder="Address"
                        type="text"
                        id="Address"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                    />

                    <Style.Input
                        placeholder="City"
                        type="text"
                        id="city"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                    />

                    <Style.Input
                        placeholder="Contact"
                        type="text"
                        id="contact"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                        required
                    />

                    <Style.Input
                        placeholder="Old Password"
                        type="password"
                        id="oldPassword"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setOldPassword(e.target.value)}
                        value={oldPassword}
                        required
                    />

                    <Style.Input
                        placeholder="New Password"
                        type="password"
                        id="password"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <Style.Button onClick={(e) => handleSubmit(e)}>SAVE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default AddProduct;
