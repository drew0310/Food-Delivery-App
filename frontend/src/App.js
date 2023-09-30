import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Menu from './components/Menu';
import Cart from './components/cart/Cart'
import Delivery from './components/cart/Delivery';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { loadUser } from './actions/userAction';
import { useEffect, useState } from 'react';
import store from "./store";
import Profile from './components/user/Profile';
import Update from './components/user/Update';
import Forgot from './components/user/Forgot';
import NewPassword from './components/user/NewPassword';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Payment from "./components/cart/Payment";
import OrderSuccess from './components/cart/OrderSuccess';
import { useSelector } from 'react-redux';

//Payment
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import ListOrders from './components/order/ListOrders';
import OrderDetails from './components/order/OrderDetails';

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

// dispatched exactly once when the component is first rendered , and check if user is Authenticated
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

// this useEffect will trigger when isAuthenticated variable changes
  useEffect(() => {
    async function getStripeApiKey() {
      try {
        const { data } = await axios.get("/api/v1/stripeapi");
        setStripeApiKey(data.stripeApiKey);
      } catch (error) {
        console.error("Error fetching Stripe API key:", error);
      }
    }
    if (isAuthenticated) {
      getStripeApiKey();
    }
  }, [isAuthenticated]);
  return (
    <Router>
      <div className='App'>
        <Header />
          <div className='container container-fluid'>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/eats/stores/search/:keyword" element={<Home />} exact />
              <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
              <Route path="/cart" element={<Cart />} exact />
              <Route path="/delivery" element={<Delivery />} exact />
              <Route path="/users/login" element={<Login />} exact />
              <Route path="/users/signup" element={<Register />} exact />
              <Route path="/users/me" element={<Profile />} exact />
              <Route path="/users/me/update" element={<Update />} exact />
              <Route path="/users/forgetPassword" element={<Forgot />} exact />
              <Route path="/users/resetPassword/:token" element={<NewPassword />} exact />
              <Route path="/confirm" element={<ConfirmOrder />} exact />

              {
                stripeApiKey && (
                  <Route 
                    path="/payment"
                    element = {
                      <Elements stripe={loadStripe(stripeApiKey)}>
                        <Payment />
                      </Elements>
                    }
                  />
                )
              }
              <Route path="/success" element={<OrderSuccess />} exact />
              <Route path="/eats/orders/me/myOrders" element={<ListOrders />} exact/>
              <Route path="/eats/orders/:id" element={<OrderDetails />} exact />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
