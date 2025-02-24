import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/requestUser";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import showPasswordIcon from "../../assets/showPassword.png";
import dontShowPasswordIcon from "../../assets/dontShowPassword.png";
import "./style.css";
import { Spin } from "antd";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleRegister = async () => {
    setLoading(true);
    let request = {
      nome: name,
      cpf: formatarCPF(usuario.cpf),
      telefone: phoneNumber,
      email: email,
      password: password,
    };

    try {
      const response = await cadastrarUsuario(request);
      const userId = response.data.id;
      toast.success("Data registered with success!");
      setTimeout(() => navigate(`/${userId}`), 2000);
    } catch (error) {
      toast.error("Failed to register data, please try again!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <section className="signUpBody">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img className="img1" src={logo} alt="Logo" />
            </Link>
          </div>

          <h1 className="title1">Sell online with Shopify</h1>
          <p className="p1">Trusted by millions of businesses worldwide</p>
        </div>

        <div className="formSignUp">
          <h2 className="titleRegistration">Make your Registration Below</h2>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button className="button1" onClick={handleRegister}>
            Sign Up
          </button>
        </div>
      </section>
    </Spin>
  );
};

export default SignUpPage;
