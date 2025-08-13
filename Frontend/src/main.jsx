import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Article from './Pages/User/Article';
import Studymaterial from './Pages/User/Studymaterial';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/article" element={<Article />} />
        <Route path="/studymaterial" element={<Studymaterial />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
