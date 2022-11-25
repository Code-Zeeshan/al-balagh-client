import { Add, Remove } from "@material-ui/icons";
import { Style } from "./Product.styled";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import productService from "../../services/product.service";

const Product = () => {

  const [product, setProduct] = useState({});
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        // const response = await axiosPrivate.get('/products/findOne', {
        //   // signal: controller.signal,
        //   // withCredentials: true
        //   params: {
        //     productId: productId
        //   }
        // });
        const response = await productService.findOne(productId);
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
  }, [])

  return (
    <Style.Container>
      {Object.keys(product).length > 0 && <Style.Wrapper>
        <Style.ImgContainer>
          <Style.Image src={ product.img } />
        </Style.ImgContainer>
        <Style.InfoContainer>
          <Style.Title>{ product.title }</Style.Title>
          <Style.Desc>
            {product.desc}
          </Style.Desc>
          <Style.Price>{product.price}</Style.Price>
          <Style.FilterContainer>
            <Style.Filter>
              <Style.FilterTitle>Color</Style.FilterTitle>
              <Style.FilterColor color="black" />
              <Style.FilterColor color="darkblue" />
              <Style.FilterColor color="gray" />
            </Style.Filter>
            <Style.Filter>
              <Style.FilterTitle>{product.size}</Style.FilterTitle>
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
              <Remove />
              <Style.Amount>1</Style.Amount>
              <Add />
            </Style.AmountContainer>
            <Style.Button>ADD TO CART</Style.Button>
          </Style.AddContainer>
        </Style.InfoContainer>
      </Style.Wrapper>
      }
    </Style.Container>
  );
};

export default Product;
