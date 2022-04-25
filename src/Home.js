import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("./img/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg")}
          alt=""
        />

        <div className="home__row">
          <Product
            id="1234989830"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image={require("./img/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg")}
            rating={5}
          />
          <Product
            id="348901234"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={29.99}
            image={require("./img/81O+GNdkzKL._AC_SX450_.jpg")}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="2349875983"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={29.99}
            image={require("./img/71Swqqe7XAL._AC_SX466_.jpg")}
            rating={5}
          />
          <Product
            id="3658308049"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={29.99}
            image={require("./img/P6LTG_SQ1_0000000071_CHARCOAL_SLf.jpg")}
            rating={5}
          />
          <Product
            id="9073789072"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={29.99}
            image={require("./img/816ctt5WV5L._AC_SX385_.jpg")}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="34687238974"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
            price={29.99}
            image={require("./img/6125mFrzr6L._AC_SX355_.jpg")}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
