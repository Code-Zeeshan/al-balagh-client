import { useEffect, useState } from "react";
import { popularProducts } from "../../services/data";
import Product from "../product/Product";
import { Style } from "./Products.styled";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import authService from "../../services/auth.service";
import productService from "../../services/product.service";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const Products = () => {
  const [products, setProducts] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
      try {
        const response = await productService.getAll();
        isMounted && setProducts(response.data);
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    }

    getProducts();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])


  return (
    <Style.Container>
      {products.length > 0 && products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Style.Container>
  );
};

export default Products;
