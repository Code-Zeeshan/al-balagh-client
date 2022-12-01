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
    const [orders, setOrders] = useState([]);
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
                if (response.data?.length > 0) {
                    setOrders(response.data);
                }
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

    const sendEmail = async (data, state) => {
        try {
            const payload = {
                name: data._id.name,
                email: data._id.email,
                state
            }
            const response = await axiosPrivate.axios.post("/orders/dispatchEmail", payload);
        } catch (err) {
            console.error("err", err);
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
                        {orders?.map((item, i) => (
                            <React.Fragment key={item._id}>
                                <Style.UserDetail>
                                    <b>Name: </b> {item._id.name}
                                    <b>Email: </b> {item._id.email}
                                    <b>City: </b>{item._id.city}
                                </Style.UserDetail>
                                {item?.orders?.map((ele, i) => (
                                    <Style.Product key={i}>
                                        <Style.ProductDetail>
                                            <Style.Image src={ele.products.imageURL} />
                                            <Style.Details>
                                                <Style.ProductName>
                                                    <b>Product:</b> {ele.products.title}
                                                </Style.ProductName>
                                                <Style.ProductName>
                                                    <b>Price:</b> {ele.products.price} PKR
                                                </Style.ProductName>
                                            </Style.Details>
                                        </Style.ProductDetail>
                                        <Style.PriceDetail>
                                            <Style.ProductAmountContainer>
                                            </Style.ProductAmountContainer>
                                            <Style.ProductPrice>
                                                <b>Quantity</b>
                                                {ele.products.quantity}
                                            </Style.ProductPrice>
                                        </Style.PriceDetail>
                                    </Style.Product>
                                ))}
                                <Style.Hr />
                                {/* <Style.LastRow> */}
                                <div style={{ display: "flex", width: "100%" }}>
                                    <h3>Total : PKR {item.total}</h3>
                                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                        <Style.Button onClick={() => sendEmail(item, "Accepted")}>ACCEPT</Style.Button>
                                        <Style.Button onClick={() => sendEmail(item, "Rejected")} >REJECT</Style.Button>
                                    </div>
                                </div>
                                {/* </Style.LastRow> */}
                            </React.Fragment>
                        ))}
                    </Style.Info>
                </Style.Bottom>
                {/* <Style.TopButton onClick={(e)=>placeOrder(e)}>Order</Style.TopButton> */}
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Order;