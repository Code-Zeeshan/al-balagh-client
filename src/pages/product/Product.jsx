import { Add, Remove } from "@material-ui/icons";
import { Style } from "./Product.styled";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import productService from "../../services/product.service";
import { getCount } from "../../redux/cart/CartActions";
import { useSelector, useDispatch } from "react-redux";


const Product = () => {

  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        // const response = await productService.findOne(productId);
        const response = await axiosPrivate.axios.get("/products/findOne", { params: { params: productId } });

        setProduct(response.data);
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

  const addToCart = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.axios.post("/carts/addOne", { productId: product._id, count });
      const { itemCount } = response.data;
      if (itemCount)
        dispatch(getCount(itemCount));  

    } catch (err) {
      console.error("err", err);
    }
  }


  return (
    <Style.Container>
      {Object.keys(product).length > 0 && <Style.Wrapper>
        <Style.ImgContainer>
          <Style.Image src={product.imageURL} />
        </Style.ImgContainer>
        <Style.InfoContainer>
          <Style.Title><b>{product.title}</b></Style.Title>
          <Style.Desc>
            {product.desc}
          </Style.Desc>
          <Style.Price><b>{product.price} PKR</b></Style.Price>
          <Style.FilterContainer>
            {/* <Style.Filter>
              <Style.FilterTitle>Color</Style.FilterTitle>
              <Style.FilterColor color="black" />
              <Style.FilterColor color="darkblue" />
              <Style.FilterColor color="gray" />
            </Style.Filter> */}
            <Style.Filter>
              <Style.FilterTitle>Size</Style.FilterTitle>
              <Style.FilterSize>
                {/* <Style.FilterSizeOption>XS</Style.FilterSizeOption>
                <Style.FilterSizeOption>S</Style.FilterSizeOption>
                <Style.FilterSizeOption>M</Style.FilterSizeOption>
                <Style.FilterSizeOption>L</Style.FilterSizeOption>
                <Style.FilterSizeOption>XL</Style.FilterSizeOption> */}
                {product.size?.map((s) => (
                  <Style.FilterSizeOption key={s}>{s}</Style.FilterSizeOption>
                ))}
              </Style.FilterSize>
            </Style.Filter>
          </Style.FilterContainer>
          <Style.AddContainer>
            <Style.AmountContainer>
              <Remove
                onClick={() => count > 0 && setCount(count - 1)}
              />
              <Style.Amount>{count}</Style.Amount>
              <Add
                onClick={() => count < product.quantity && setCount(count + 1)}
              />
            </Style.AmountContainer>
            <Style.Button onClick={(e) => addToCart(e)}>ADD TO CART</Style.Button>
          </Style.AddContainer>
        </Style.InfoContainer>
      </Style.Wrapper>
      }
    </Style.Container>
  );
};

export default Product;
