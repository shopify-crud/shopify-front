import "./style.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { loginUsuario } from "../../services/requestUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUsuario(email, password);
      toast("Welcome to our site!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Error: Invalid email or password");
      console.error(error);
    }
  };

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
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="email"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="button1" onClick={handleLogin}>
            Login
          </button>
          <p href="">
            If you don't have a passowrd, click <a href="/signUp">Here</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
