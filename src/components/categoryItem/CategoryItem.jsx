import React from 'react'
import { Style } from "./CategoryItem.Styed";

function CategoryItem({ item }) {
    return (
        <Style.Container>
            <Style.Image src={item.img}></Style.Image>
            <Style.Info>
                <Style.Title>{item.title}</Style.Title>
                <Style.Button>SHOP NOW</Style.Button>
            </Style.Info>
        </Style.Container>
    )
}

export default CategoryItem