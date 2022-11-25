import React from 'react'
import { Style } from './Categories.styled';
import { categories } from "../../services/data";
import CategoryItem from "../categoryItem/CategoryItem";

function Categories() {
  return (
    <Style.Container>
      {
        categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))
      }
    </Style.Container>
  )
}

export default Categories