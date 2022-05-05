import logo from './logo.svg';
import React, {useState} from "react";
import s from './App.css';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Pages/News/News";
import GameInfo from "./components/Pages/GameInfo/GameInfo";
import CrisisEvent from "./components/Pages/CrisisEvent/CrisisEvent";
import BuddyPass from "./components/Pages/BuddyPass/BuddyPass";
import Community from "./components/Pages/Community/Community";
import Services from "./components/Pages/Services/Services";
import BuyNow from "./components/Pages/BuyNow/BuyNow";



function App() {
    const [size, setSize] = useState([window.innerWidth,window.innerHeight]);
    const valuesize =()=>{
        setSize([window.innerWidth, window.innerHeight]);
        return (size, console.log(size))
    }
  return (
      <BrowserRouter>
          <div>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<HomePage valuesize={valuesize} size={size}/>}></Route>
                  <Route path="/news" element={<News/>}></Route>
                  <Route path="/gameinfo" element={<GameInfo/>}></Route>
                  <Route path="/crisisevent" element={<CrisisEvent/>}></Route>
                  <Route path="/buddypass" element={<BuddyPass/>}></Route>
                  <Route path="/community" element={<Community/>}></Route>
                  <Route path="/services" element={<Services/>}></Route>
                  <Route path="/buynow" element={<BuyNow/>}></Route>
              </Routes>
              <Footer/>

          </div>
      </BrowserRouter>

  );
}

export default App;
