import { Style } from "./Order.styled";
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
        const getOrders = async () => {
            try {
                const response = await axiosPrivate.axios.get("/orders/findMany");
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getOrders();
        return () => {
            isMounted = false;
        }
    }, []);

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
                                        </Style.Details>
                                    </Style.ProductDetail>
                                    <Style.PriceDetail>
                                        <Style.ProductAmountContainer>
                                        </Style.ProductAmountContainer>
                                        <Style.ProductPrice>{item.productId.price} PKR</Style.ProductPrice>
                                    </Style.PriceDetail>
                                </Style.Product>
                                <Style.Hr />
                            </React.Fragment>
                        ))}
                    </Style.Info>
                </Style.Bottom>

                <h3>Total : PKR </h3>
                {/* <Style.TopButton onClick={(e)=>placeOrder(e)}>Order</Style.TopButton> */}
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Order;