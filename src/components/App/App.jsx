import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import UserForm from '../User/UserForm';
import Sidebar from '../Sidebar/Sidebar';
import AppRoutes from '../Routes/Routes';
import Footer from '../Footer/Footer';

import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <UserForm />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
