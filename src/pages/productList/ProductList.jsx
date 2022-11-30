import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Style } from "./ProductList.styled";
import { Search, ShoppingCartOutlined, Person, UpdateOutlined } from '@material-ui/icons';


function ProductList() {
    return (
        <Style.Container>
            {/* <Announcement /> */}
            {/* <Style.Title>Dresses</Style.Title> */}
            <Style.FilterContainer>
                {/* <Style.Filter>
                    <Style.FilterText>Filter Products:</Style.FilterText>
                    <Style.Select>
                        <Style.Option disabled defaultValue>
                            Color
                        </Style.Option>
                        <Style.Option>White</Style.Option>
                        <Style.Option>Black</Style.Option>
                        <Style.Option>Red</Style.Option>
                        <Style.Option>Blue</Style.Option>
                        <Style.Option>Yellow</Style.Option>
                        <Style.Option>Green</Style.Option>
                    </Style.Select>
                    <Style.Select>
                        <Style.Option disabled defaultValue>
                            Size
                        </Style.Option>
                        <Style.Option>XS</Style.Option>
                        <Style.Option>S</Style.Option>
                        <Style.Option>M</Style.Option>
                        <Style.Option>L</Style.Option>
                        <Style.Option>XL</Style.Option>
                    </Style.Select>
                </Style.Filter>
                <Style.Filter>
                    <Style.FilterText>Sort Products:</Style.FilterText>
                    <Style.Select>
                        <Style.Option defaultValue>Newest</Style.Option>
                        <Style.Option>Price (asc)</Style.Option>
                        <Style.Option>Price (desc)</Style.Option>
                    </Style.Select>
                </Style.Filter> */}
                <Style.SearchContainer><Style.Input></Style.Input><Search /></Style.SearchContainer>

            </Style.FilterContainer>
            <Products />
            {/* <Newsletter /> */}
        </Style.Container>
    )
}

export default ProductList