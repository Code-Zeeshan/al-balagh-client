import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    InfoOutlined
} from "@material-ui/icons";
import { Style } from "./Product.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";


const Product = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const goToProductDetail = e => {
        e.preventDefault();
        navigate(`/products/${item._id}`);
        // navigate(`/products/add`);
      }

    return (
        <Style.Container>
            <Style.Circle />
            <Style.Image src={item.imageURL} />
            <Style.Info>
                <Style.Icon>
                    <ShoppingCartOutlined />
                </Style.Icon>
                <Style.Icon onClick={(e) => goToProductDetail(e)}>
                    <InfoOutlined />
                </Style.Icon>
                {/* <Style.Icon>
                    <FavoriteBorderOutlined />
                </Style.Icon> */}
            </Style.Info>
        </Style.Container>
    );
};

export default Product;