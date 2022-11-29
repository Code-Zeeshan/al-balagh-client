import { Style } from "./Cart.styled";
import { Add, Remove } from "@material-ui/icons";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector, useDispatch } from "react-redux";
import { getCount } from "../../redux/cart/CartActions";
import React from "react";

const Order = () => {
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);
    const { auth } = useAuth();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        let isMounted = true;
        const getCart = async () => {
            try {
                const response = await axiosPrivate.axios.get("/orders/findByUserId");
                setCart(response.data);
                if (cart?.products?.length > 0) {
                    setProducts(cart.products);
                }
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

    const placeOrder = async e=>{
        e.preventDefault();
        console.log(products);
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

                <h3>Total : PKR 20</h3>
                <Style.TopButton onClick={(e)=>placeOrder(e)}>Order</Style.TopButton>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Order;