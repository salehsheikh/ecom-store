import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Home from './pages/Home';
import Store from './Slices/store';
import SingleProduct from './pages/SingleProduct';
import AboutUs from './pages/AboutUs';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from './pages/ChekoutPage';
import Signup from './auth/SignUp';
import Login from './auth/Login';
import BreadCrumbs from './breadcrumbs/BreadCrumbs';
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar />
      <BreadCrumbs/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
    <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
