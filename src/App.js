import React from "react";
import {BrowserRouter as Router,Route,Routes}from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import SingleProduct from "./SingleProduct";
import About from "./About";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider} from "styled-components";
const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProduct></SingleProduct>}
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/*" element={<Errorpage></Errorpage>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
