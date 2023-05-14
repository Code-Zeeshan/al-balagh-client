import { useEffect, useState } from "react";
import Product from "../product/Product";
import { Style } from "./Products.styled";
import productService from "../../services/product.service";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Products = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
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

        setProducts(response.data);
        setSearchResult(response.data);
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

  useEffect(() => {
    if (typeof title === "string") {
      filterProducts(title);
    }
  }, [title]);
  const filterProducts = (title = "") => {
    if (title.trim() === "") setSearchResult(products);
    else
      setSearchResult(products.filter(product => product.title.match(new RegExp(title.trim(), "i"))));
  }

  return (
    <Style.Container>
      {searchResult.length > 0 && searchResult.map((item) => (
        <Product item={item} key={item._id} setSearchResult={setSearchResult} />
      ))}
    </Style.Container>
  );
};

export default Products;
