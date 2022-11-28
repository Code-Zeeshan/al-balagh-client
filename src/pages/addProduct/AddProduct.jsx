import { Style } from "./AddProduct.styled";
import { useRef, useState, useEffect, useContext } from 'react';
import productService from "../../services/product.service";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const AddProduct = () => {
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

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const response = await productService.addOne({
            //     title,
            //     desc,
            //     img,
            //     size,
            //     color,
            //     price,
            //     quantity
            // });
            const payload = {
                title,
                desc,
                img,
                size,
                color,
                price,
                quantity
            };
            const formData = new FormData();
            for (const key in payload) {
                formData.append(key, payload[key]);
            }
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
                <Style.Form>
                    <Style.Input
                        placeholder="title"
                        type="text"
                        id="title"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />

                    <Style.Input
                        placeholder="desc"
                        type="text"
                        id="desc"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        required
                    />

                    <Style.Input
                        placeholder="size"
                        type="text"
                        id="size"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                        required
                    />

                    <Style.Input
                        placeholder="color"
                        type="text"
                        id="color"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        required
                    />

                    <Style.Input
                        placeholder="price"
                        type="number"
                        id="price"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />

                    <Style.Input
                        placeholder="quantity"
                        type="number"
                        id="quantity"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                    />
                    <Style.Input
                        placeholder="img"
                        type="file"
                        id="img"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setImg(e.target.files[0])}
                        required
                    />
                    <Style.Button onClick={(e) => handleSubmit(e)}>SAVE</Style.Button>
                </Style.Form>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default AddProduct;
