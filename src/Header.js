import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import {signOut} from "firebase/auth";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      signOut(auth);
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={require("./img/amazon.png")}
          alt="Logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user&&'/login'}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello, {!user ? "Guest": user.email}</span>
            <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
