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
    const [selectedOption, setSelectedOption] = useState('pending');
    const { auth } = useAuth();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;
        const getOrders = async () => {
            try {
                fetchData(selectedOption);
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

    const fetchData = async (status) => {
        const queryParams = new URLSearchParams({ status }).toString();
        const response = await axiosPrivate.axios.get(`/orders/findMany?${queryParams}`);
        setOrders(response.data);
    };

    const sendEmail = async (data, status) => {
        try {
            console.log("ite", data);
            const payload = {
                orderId: data._id.orderId,
                name: data._id.name,
                email: data._id.email,
                status
            }
            const response = await axiosPrivate.axios.post("/orders/dispatchEmail", payload);
            navigate("/products");
        } catch (err) {
            console.error("err", err);
        }
    };

    const handleDropdownChange = async (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
        await fetchData(event.target.value);
    };


    return (
        <Style.Container>
            <Style.Wrapper>

                <div className="relative">
                    <select
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 12l-4-4h8l-4 4z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>


                <Style.Bottom>
                    <Style.Info>
                        {orders?.map((item, i) => (
                            <React.Fragment key={item._id.orderId}>
                                <Style.UserDetail>
                                    <b>Name: </b> {item._id.name}
                                    <b>Email: </b> {item._id.email}
                                    <b>City: </b>{item._id.city}
                                </Style.UserDetail>
                                {item?.array?.map((ele, j) => (
                                    <Style.Product key={j}>
                                        <Style.ProductDetail>
                                            <Style.Image src={ele.order.product.imageURL} />
                                            <Style.Details>
                                                <Style.ProductName>
                                                    <b>Product:</b> {ele.order.product.title}
                                                </Style.ProductName>
                                                <Style.ProductName>
                                                    <b>Price:</b> {ele.order.product.price} PKR
                                                </Style.ProductName>
                                            </Style.Details>
                                        </Style.ProductDetail>
                                        <Style.PriceDetail>
                                            <Style.ProductAmountContainer>
                                            </Style.ProductAmountContainer>
                                            <Style.ProductPrice>
                                                <b>Quantity</b>
                                                {ele.order.product.quantity}
                                            </Style.ProductPrice>
                                        </Style.PriceDetail>
                                    </Style.Product>
                                ))}
                                <Style.Hr />
                                {/* <Style.LastRow> */}
                                <div style={{ display: "flex", width: "100%" }}>
                                    <h3>Total : PKR {item.total}</h3>
                                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                                        {
                                            selectedOption === "pending" &&
                                            <>
                                                <Style.Button onClick={() => sendEmail(item, "accepted")}>ACCEPT</Style.Button>
                                                <Style.Button onClick={() => sendEmail(item, "rejected")} >REJECT</Style.Button>
                                            </>
                                        }
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