import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import ContexTheme from './components/Context/ContexTheme';
import Theme from './components/Configs/Theme';
import Blog from './components/Blog/Blog';
import SearchEmoji from './components/SearchEmoji/SearchEmoji';
import ProductA from './components/Products/ProductA';
import CharCounter from './components/CharCounter/CharCounter';

function App() {
const [activeTheme, setActiveTheme] = useState('green');

  return (
      <ContexTheme.Provider value={{theme: Theme[activeTheme], setActiveTheme}}>
      <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout><Home /></Layout>}/>
      <Route path='/products' element={<Layout><Products /></Layout>}/>
      <Route path='/aboutus' element={<Layout><Aboutus /></Layout>}/>
      <Route path='/contactus' element={<Layout><Contactus /></Layout>}/>
      <Route path='/blog' element={<Layout><Blog /></Layout>}/>
      <Route path='/searchemoji' element={<Layout><SearchEmoji /></Layout>}/>
      <Route path='/products/:id' element={<Layout><ProductA /></Layout>}/>
      <Route path='/charcounter' element={<Layout><CharCounter /></Layout>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </ContexTheme.Provider>
  );
}

export default App;
