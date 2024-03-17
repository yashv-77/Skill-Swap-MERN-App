import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import { FloatButton } from './FloatButton'
import Features from "./Features";
import Community from "./Community";
import MyNavbar from "./Navbar";
import Footer from "./Footer";


export default  function LandingPage() {
  return (
    <div className="relative">
      <MyNavbar/>
      <Container1/>
      
      <Container2/>

      <Container3/>

      <Features/>

      <Community/>
      
      <FloatButton/>
      <Footer/>
    </div>
  );
}


