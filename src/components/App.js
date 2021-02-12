import React from "react";
import "../styles/App.scss";
import "../styles/css-variables.scss";

import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
