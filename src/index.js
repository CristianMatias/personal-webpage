import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CustomNavBar from './components/NavBar';
import CustomFooter from './components/Footer';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CustomNavBar />
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    <CustomFooter />
  </Router>
);

