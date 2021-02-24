import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './HeroElements';
  import './Hero.css'

  const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>The Farmer's E-Shop</HeroH1>
          <HeroP>Exclusive for farmers</HeroP>
          <div className="btns">
            <HeroBtn>Place Order</HeroBtn>
            <HeroBtn className="s1">Be A Seller</HeroBtn>
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
