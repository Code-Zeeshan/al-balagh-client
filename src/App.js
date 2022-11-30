import './App.css';
import Home from "./pages/home";
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import UserProfile from './pages/userProfile/UserProfile';
import Layout from './components/Layout';
import AddProduct from "./pages/addProduct/AddProduct";
import {
  Routes,
  Route
} from "react-router-dom";
import UserAuth from "./components/common/UserAuth";
import PersistLogin from "./components/common/PersistLogin";
import Chat from "./pages/chat/Chat";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route element={<UserAuth />}>
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Order />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="chat" element={<Chat />} />
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
              <Route path="add" element={<AddProduct />} />
            </Route>
          </Route>
        </Route>
        {/* <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
