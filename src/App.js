import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, (user) => {
      if(user) {
        // the user just logged in

        dispatch({
          type: "SET_USER",
          user: user, 

        })
      }else {
        // the user is logged out
        
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            index
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
