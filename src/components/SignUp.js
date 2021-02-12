import React from "react";
import "../styles/SignUp.scss";

const SignUp = () => {
  return (
    <section className="section section--sign-up">
      <div className="section__title">
        <h3 className="section__header">Ready to get started trading with us?</h3>
        <button className="btn btn--show-modal">Sign Up</button>
      </div>
    </section>
  );
};

export default SignUp;
