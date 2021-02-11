import React from "react";
import "../styles/App.scss";
import "../styles/css-variables.scss";

import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
    </>
  );
};

export default App;
