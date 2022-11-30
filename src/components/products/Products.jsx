import { useEffect, useState } from "react";
import Product from "../product/Product";
import { Style } from "./Products.styled";
import productService from "../../services/product.service";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProducts = async () => {
      try {
        // const response = await productService.getAll();
        const response = await axiosPrivate.axios.get("/products/findMany");

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
  }, []);

  return (
    <Style.Container>
      {products.length > 0 && products.map((item) => (
        <Product item={item} key={item._id} setProducts={setProducts} />
      ))}
    </Style.Container>
  );
};

export default Products;
