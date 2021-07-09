import React from 'react';
import './App.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import WhatIDo from './components/whatido/WhatIDo';
import WhyMe from './components/whyme/WhyMe';
import Portfolio from './components/portfolio/Portfolio';
import Description from './components/description/Description';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
       <Home />
       <WhatIDo />
       <WhyMe />
       <Portfolio />
       <Description />
       <Contact />
       <Footer className="footer"/>
      </div>
    </div>
  );
}

export default App;