import { Style } from "./Cart.styled";
import { Add, Remove } from "@material-ui/icons";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector, useDispatch } from "react-redux";
import { getCount } from "../../redux/cart/CartActions";
import React from "react";

const Cart = () => {
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);
    const { auth } = useAuth();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const getCart = async () => {
            try {
                const response = await axiosPrivate.axios.get("/carts/findByUserId");
                setCart({ ...response.data });
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getCart();
        return () => {
            isMounted = false;
        }
    }, []);

    useEffect(() => {
        if (cart?.products?.length > 0) {
            setProducts([...cart.products]);
            countTotalAmount();
        }
        // else {
        //     dispatch(getCount(0));
        // }
    }, [cart]);

    const updateCart = async (product) => {
        try {
            const response = await axiosPrivate.axios.put("/carts/updateOne",
                {
                    count: product.count,
                    productId: product.productId._id,
                    userId: cart.userId
                }
            );
        } catch (err) {
            console.error(err);
            navigate('/login', { state: { from: location }, replace: true });
        }
    }
    const countTotalItems = () => {
        if (products.length > 0) {
            return products.reduce((acc, value) => acc + value.count, 0);
        }
        return 0;
    }

    const countTotalAmount = () => {
        let total = 0;
        if (products?.length > 0) {
            total = products.reduce((acc, value) =>
                acc + (value.count * value.productId.price),
                0);

        }
        setTotalAmount(total);
        // return total;
    }
    const increment = async (e, product) => {
        e.preventDefault();
        const index = products.indexOf(product);
        if (product.count < product.productId.quantity) {
            await updateCart(product);
            const newProducts = [...products];
            newProducts[index].count++;
            setProducts(newProducts);
            countTotalAmount();
            dispatch(getCount(countTotalItems()));
        }
    }

    const decrement = async (e, product) => {
        e.preventDefault();
        const index = products.indexOf(product);
        if (product.count > 0) {
            await updateCart(product);
            const newProducts = [...products];
            newProducts[index].count--;
            setProducts(newProducts);
            countTotalAmount();
            dispatch(getCount(countTotalItems()));
        }
    }

    const placeOrder = async () => {
        // e.preventDefault();
        const items = products.map(item => {
            return { productId: item.productId._id, quantity: item.count }
        });
        try {
            const response = await axiosPrivate.axios.post("/orders/addOne",
                {
                    count: countTotalItems(),
                    products: items,
                    userId: cart.userId,
                    amount: totalAmount
                }
            );
        } catch (err) {
            console.error(err);
            navigate('/login', { state: { from: location }, replace: true });
        }
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                <Style.Bottom>
                    <Style.Info>
                        {cart?.products?.map((item, i) => (
                            <React.Fragment key={item._id}>
                                <Style.Product>
                                    <Style.ProductDetail>
                                        <Style.Image src={item.productId.imageURL} />
                                        <Style.Details>
                                            <Style.ProductName>
                                                <b>Product:</b> {item.productId.title}
                                            </Style.ProductName>
                                        </Style.Details>
                                    </Style.ProductDetail>
                                    <Style.PriceDetail>
                                        <Style.ProductAmountContainer>
                                            <Add
                                                onClick={(e) => increment(e, item, products)}
                                            />
                                            <Style.ProductAmount>{item.count}</Style.ProductAmount>
                                            <Remove
                                                onClick={(e) => decrement(e, item, products)}
                                            />
                                        </Style.ProductAmountContainer>
                                        <Style.ProductPrice>{item.productId.price} PKR</Style.ProductPrice>
                                    </Style.PriceDetail>
                                </Style.Product>
                            </React.Fragment>
                        ))}
                <Style.Hr />
                    </Style.Info>
                </Style.Bottom>
                <div className="flex gap-2 items-end">
                    <h3 style={{ alignSelf: "end", marginBottom: "15px" }}>Total : PKR {totalAmount}</h3>
                    <Style.TopButton disabled={totalAmount === 0} onClick={placeOrder}>Order</Style.TopButton>
                </div>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Cart;