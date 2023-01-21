import React,{ useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import bride from "./assets/images/bride.svg";
import brideMobile from "./assets/images/brideMobile.svg";
import layer from "./assets/images/layer.svg";
import layerMobile from "./assets/images/layerMobile.svg";
import brides from "./assets/images/bridess.svg";
import footer from "./assets/images/footer.svg";
import pat from "./assets/images/pat.svg";
import "./App.css"

function App() {
  return (
    <>
      <div className="bookBackground">
        <div className="brideBackground ">
          <div className="parent">
            <img src={bride} alt="bride" className="bride-cover image1 " />
            <img src={brideMobile} alt="bride" className="bride-mobile" />
            <img src={layer} alt="layer" className="bride-cover image2" />
            <img src={layerMobile} alt="layer" className="layerMobile" />
            <img src={logo} alt="img" className="img3 " />
            <p className="text-title">Book a Visit</p>
          </div>
          
          <div className="paternDiv position-relative">
            <div className="book-section">
            <div className="text ">To book an appoitment with Elissar bridal at an upcoming bridal market, click here:
          </div>
            <button type="button">Book Bridal Market</button>
          <div className="text">To book a store visit to your store by the Elissar Bridal team to show you the newest collections, click here:
          </div>
            <button type="button">Book Store Visit</button>
          <div className="text">To cntact us or schedule a call, click here:
          </div>
            <button type="button">Book Phone Call</button>
          </div>
          <img src={pat} alt="pattern" className="pattern bri" />

          <img src={brides} alt="pattern" className="bri margin" />
          <img src={footer} alt="pattern" className="bri mt" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
