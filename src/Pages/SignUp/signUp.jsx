import "./style.css";
import logo from "../../assets/logo.png";

const SignUpPage = () => {
  return (
    <>
      {" "}
      <section className="signUpBody">
        <div className="content">
          <div className="logo">
            <img className="img1" src={logo} alt="Logo"/>
          </div>

          <h1 className="title1">Sell online with Shopify</h1>

          <p className="p1">Trusted by millions of businesses worldwide</p>
        </div>
        <div className="formSignUp">
          <input type="email" placeholder="Enter your full name" />
          <input type="email" placeholder="Enter your home adress" />
          <input type="email" placeholder="Enter your city" />
          <input type="email" placeholder="Enter your CPF" />
          <input type="email" placeholder="Enter your CEP" />
          <input type="email" placeholder="Enter password" />
          <button className="button1">Sign Up</button>
        </div>
      </section>
    </>
  );
};
export default SignUpPage;
