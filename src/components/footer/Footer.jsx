import React from 'react'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import {Style } from "./Footer.styled";

function Footer() {
    return (
        <Style.Container>
            <Style.Left>
                <Style.Logo>SHOP</Style.Logo>
                <Style.Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Style.Desc>
                <Style.SocialContainer>
                    <Style.SocialIcon color="3B5999">
                        <Facebook />
                    </Style.SocialIcon>
                    <Style.SocialIcon color="E4405F">
                        <Instagram />
                    </Style.SocialIcon>
                    <Style.SocialIcon color="55ACEE">
                        <Twitter />
                    </Style.SocialIcon>
                    <Style.SocialIcon color="E60023">
                        <Pinterest />
                    </Style.SocialIcon>
                </Style.SocialContainer>
            </Style.Left>
            <Style.Center>
                <Style.Title>Useful Links</Style.Title>
                <Style.List>
                    <Style.ListItem>Home</Style.ListItem>
                    <Style.ListItem>Cart</Style.ListItem>
                    <Style.ListItem>Man Fashion</Style.ListItem>
                    <Style.ListItem>Woman Fashion</Style.ListItem>
                    <Style.ListItem>Accessories</Style.ListItem>
                    <Style.ListItem>My Account</Style.ListItem>
                    <Style.ListItem>Order Tracking</Style.ListItem>
                    <Style.ListItem>Wishlist</Style.ListItem>
                    <Style.ListItem>Wishlist</Style.ListItem>
                    <Style.ListItem>Terms</Style.ListItem>
                </Style.List>
            </Style.Center>
            <Style.Right>
                <Style.Title>Contact</Style.Title>
                <Style.ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </Style.ContactItem>
                <Style.ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </Style.ContactItem>
                <Style.ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
                </Style.ContactItem>
                <Style.Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Style.Right>
        </Style.Container>
    )
}

export default Footer