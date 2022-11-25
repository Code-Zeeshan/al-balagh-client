import React from 'react'
import { Badge } from "@material-ui/core";
import { Style } from './Navbar.styled';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToRegister = e => {
    e.preventDefault();
    navigate("/register");
  }

  const goToLogin = e => {
    e.preventDefault();
    navigate("/login");
  }
  const goToCart = e => {
    e.preventDefault();
    navigate("/cart");
  }
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Left>
        <Style.Logo>Al Balagh</Style.Logo>
          {/* <Style.Language>
            En
          </Style.Language>
          <Style.SearchContainer><Style.Input></Style.Input><Search /></Style.SearchContainer> */}
        </Style.Left>
        {/* <Style.Center>
          <Style.Logo>Shopy</Style.Logo>
        </Style.Center> */}
        <Style.Right>
          <Style.MenuItem onClick={(e) => goToRegister(e)}>REGISTER</Style.MenuItem>
          <Style.MenuItem onClick={(e) => goToLogin(e)}>LOGIN</Style.MenuItem>
          <Style.MenuItem onClick={(e) => goToLogin(e)}>CHAT</Style.MenuItem>
          <Style.MenuItem onClick={(e) => goToLogin(e)}>PROFILE</Style.MenuItem>
          <Style.MenuItem onClick={(e) => goToCart(e)}>
            <Badge overlap="rectangular" badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Style.MenuItem>
        </Style.Right>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default Navbar