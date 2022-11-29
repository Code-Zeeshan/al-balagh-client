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
                if (response.data?.products?.length > 0) {
                    setProducts([...response.data.products]);
                    console.log("prod", products);
                }
                else {
                    dispatch(getCount(0));
                }
                countTotalAmount();

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
            console.log("res", response.data);
        } catch (err) {
            console.error(err);
            navigate('/login', { state: { from: location }, replace: true });
        }
    }

    return (
        <Style.Container>
            <Style.Wrapper>
                {/* <Style.Title>YOUR BAG</Style.Title>
                <Style.Top>
                    <Style.TopButton>CONTINUE SHOPPING</Style.TopButton>
                    <Style.TopTexts>
                        <Style.TopText>Shopping Bag(2)</Style.TopText>
                        <Style.TopText>Your Wishlist (0)</Style.TopText>
                    </Style.TopTexts>
                    <Style.TopButton type="filled">CHECKOUT NOW</Style.TopButton>
                </Style.Top> */}
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
                                            {/* <Style.ProductId>
                                                <b>ID:</b> 93813718293
                                            </Style.ProductId> */}
                                            {/* <Style.ProductColor color="black" /> */}
                                            {/* <Style.ProductSize>
                                                <b>Size:</b> 37.5
                                            </Style.ProductSize> */}
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
                                <Style.Hr />
                            </React.Fragment>
                        ))}
                    </Style.Info>
                    {/* <Style.Summary>
                        <Style.SummaryTitle>ORDER SUMMARY</Style.SummaryTitle>
                        <Style.SummaryItem>
                            <Style.SummaryItemText>Subtotal</Style.SummaryItemText>
                            <Style.SummaryItemPrice>$ 80</Style.SummaryItemPrice>
                        </Style.SummaryItem>
                        <Style.SummaryItem>
                            <Style.SummaryItemText>Estimated Shipping</Style.SummaryItemText>
                            <Style.SummaryItemPrice>$ 5.90</Style.SummaryItemPrice>
                        </Style.SummaryItem>
                        <Style.SummaryItem>
                            <Style.SummaryItemText>Shipping Discount</Style.SummaryItemText>
                            <Style.SummaryItemPrice>$ -5.90</Style.SummaryItemPrice>
                        </Style.SummaryItem>
                        <Style.SummaryItem type="total">
                            <Style.SummaryItemText>Total</Style.SummaryItemText>
                            <Style.SummaryItemPrice>$ 80</Style.SummaryItemPrice>
                        </Style.SummaryItem>
                        <Style.TopButton>CHECKOUT NOW</Style.TopButton>
                    </Style.Summary> */}
                </Style.Bottom>

                <h3>Total : PKR {totalAmount}</h3>
                <Style.TopButton onClick={placeOrder}>Order</Style.TopButton>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Cart;