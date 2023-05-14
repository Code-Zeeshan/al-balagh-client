import { Badge } from "@material-ui/core";
import { Style } from './Navbar.styled';
import { Search, ShoppingCartOutlined, Person, UpdateOutlined, Height } from '@material-ui/icons';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { getCount } from "../../redux/cart/CartActions";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const count = useSelector(state => state.cart.count);
  const [cartCount, setCartCount] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const getCartCount = async () => {
      try {
        const response = await axiosPrivate.axios.get("/carts/getCount");
        setCartCount(response.data);
        dispatch(getCount(cartCount));
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    }
    if (auth.email) {
      getCartCount();
    }
    return () => {
      isMounted = false;
    }
  }, [cartCount, auth]);

  const goToRegister = e => {
    e.preventDefault();
    navigate("/register");
  }

  const goToLogin = e => {
    e.preventDefault();
    navigate("/login");
  }
  const goToProfile = e => {
    e.preventDefault();
    navigate("/profile");
  }
  const goToOrders = e => {
    e.preventDefault();
    navigate("/orders");
  }
  const goToCart = e => {
    e.preventDefault();
    navigate("/cart");
  }
  const goToProducts = e => {
    e.preventDefault();
    navigate("/products");
  }

  const goToAddProducts = e => {
    e.preventDefault();
    navigate("/products/add");
  }
  const goToChat = e => {
    e.preventDefault();
    navigate("/chat");
  }

  const signOut = async () => {
    await logout();
    navigate('/login');
  }
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Left>
          <img style={{ height: "40px" }} src="img/al-balagh-logo.png" alt="" />
        </Style.Left>
        <Style.Right>
          <Style.MenuItem onClick={(e) => goToRegister(e)}>REGISTER</Style.MenuItem>
          {!auth.role && <Style.MenuItem onClick={(e) => goToLogin(e)}>LOGIN</Style.MenuItem>}
          <Style.MenuItem onClick={(e) => goToProducts(e)}>PRODUCTS</Style.MenuItem>
          <Style.MenuItem onClick={(e) => goToChat(e)}>CHAT</Style.MenuItem>
          {auth.role === 2345 &&
            <>
              <Style.MenuItem onClick={(e) => goToProfile(e)}>PROFILE</Style.MenuItem>
              <Style.MenuItem onClick={(e) => goToCart(e)}>
                <Badge overlap="rectangular" badgeContent={count.toString()} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Style.MenuItem>

            </>
          }
          {auth.role === 7260 &&
            <>
              <Style.MenuItem onClick={(e) => goToOrders(e)}>ORDER</Style.MenuItem>
              <Style.MenuItem onClick={(e) => goToAddProducts(e)}>ADD PRODUCTS</Style.MenuItem>
            </>
          }
          {auth.accessToken && <Style.MenuItem onClick={signOut}>LOGOUT</Style.MenuItem>}
        </Style.Right>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default Navbar