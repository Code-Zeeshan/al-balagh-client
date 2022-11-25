import { Style } from "./Cart.styled";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
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
                        <Style.Product>
                            <Style.ProductDetail>
                                <Style.Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Style.Details>
                                    <Style.ProductName>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </Style.ProductName>
                                    <Style.ProductId>
                                        <b>ID:</b> 93813718293
                                    </Style.ProductId>
                                    {/* <Style.ProductColor color="black" /> */}
                                    <Style.ProductSize>
                                        <b>Size:</b> 37.5
                                    </Style.ProductSize>
                                </Style.Details>
                            </Style.ProductDetail>
                            <Style.PriceDetail>
                                <Style.ProductAmountContainer>
                                    <Add />
                                    <Style.ProductAmount>2</Style.ProductAmount>
                                    <Remove />
                                </Style.ProductAmountContainer>
                                <Style.ProductPrice>$ 30</Style.ProductPrice>
                            </Style.PriceDetail>
                        </Style.Product>
                        <Style.Hr />
                        <Style.Product>
                            <Style.ProductDetail>
                                <Style.Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Style.Details>
                                    <Style.ProductName>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </Style.ProductName>
                                    <Style.ProductId>
                                        <b>ID:</b> 93813718293
                                    </Style.ProductId>
                                    {/* <Style.ProductColor color="gray" /> */}
                                    <Style.ProductSize>
                                        <b>Size:</b> M
                                    </Style.ProductSize>
                                </Style.Details>
                            </Style.ProductDetail>
                            <Style.PriceDetail>
                                <Style.ProductAmountContainer>
                                    <Add />
                                    <Style.ProductAmount>1</Style.ProductAmount>
                                    <Remove />
                                </Style.ProductAmountContainer>
                                <Style.ProductPrice>$ 20</Style.ProductPrice>
                            </Style.PriceDetail>
                        </Style.Product>
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
                <Style.TopButton>Order</Style.TopButton>
            </Style.Wrapper>
        </Style.Container>
    );
};

export default Cart;