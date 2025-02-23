import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUsuario } from "../../services/requestUser";
import { toast } from "react-toastify";
import { Spin } from "antd";
import logo from "../../assets/logo.png";
import showPasswordIcon from "../../assets/showPassword.png";
import dontShowPasswordIcon from "../../assets/dontShowPassword.png";
import "./style.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Pega o email da URL, se presente
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginUsuario(email, password);
      const userId = response.data.id; // Supondo que o ID esteja na resposta da API
      toast("Welcome to our site!");
      setUserName(response.data.nome);
      setTimeout(() => navigate(`/${userId}`), 2000); // Passando o ID na URL
    } catch (error) {
      toast.error("Error: Invalid email or password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Spin spinning={loading}>
      <section className="loginBody">
        <div className="content">
          <div className="logo">
            <Link to="/home">
              <img className="img1" src={logo} alt="Logo" />
            </Link>
          </div>

          <h1 className="title1">Sell online with Shopify</h1>
          <p className="p1">Trusted by millions of businesses worldwide</p>
        </div>

        <div className="formLogin">
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email} // Preenche o email automaticamente
          />
          <div className="inputPassword">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="buttonVisiblePassword"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img src={showPasswordIcon} alt="" />
              ) : (
                <img src={dontShowPasswordIcon} alt="" />
              )}
            </button>
          </div>

          <button className="button1" onClick={handleLogin}>
            Login
          </button>

          <p>
            If you don't have a password, click <Link to="/signUp">Here</Link>
          </p>
        </div>
      </section>
    </Spin>
  );
};

export default LoginPage;
