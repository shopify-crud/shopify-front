import "./style.css";
import logo from "../../assets/logo.png";
const LoginPage = () => {
  return (
    <>
      <section className="loginBody">
        <div className="content">
          <div className="logo">
            <img className="img1" src={logo} alt="Logo" />
          </div>

          <h1 className="title1">Sell online with Shopify</h1>

          <p className="p1">Trusted by millions of businesses worldwide</p>
        </div>
        <div className="formLogin">
          <input type="email" placeholder="Enter your email address" />
          <input type="email" placeholder="Enter password" />
          <button className="button1">Login</button>
          <p href="">If you don't have a passowrd, click <a href="/signUp">Here</a></p>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
