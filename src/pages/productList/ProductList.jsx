import React, {useState} from 'react'
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Style } from "./ProductList.styled";
import { Search, ShoppingCartOutlined, Person, UpdateOutlined } from '@material-ui/icons';


function ProductList() {
    const [title, setTitle] = useState("");

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
                <Style.SearchContainer>   <input
                    type="text"
                    placeholder="search"
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                /></Style.SearchContainer>

            </Style.FilterContainer>
            <Products title={title} />
            {/* <Newsletter /> */}
        </Style.Container>
    )
}

export default ProductList