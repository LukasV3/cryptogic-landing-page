import React from "react";
import "./styles/index.scss";

import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import SignUp from "./components/signUp/SignUp";
import Footer from "./components/footer/Footer";

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
