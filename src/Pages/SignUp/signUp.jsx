import "./style.css";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { cadastrarUsuario } from "../../services/requestUser";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleRegister = async () => {
    let request = {
      nome: name,
      cpf: cpf,
      telefone: phoneNumber,
      email: email,
      password: password,
    };

    try {
      await cadastrarUsuario(request);
      toast.success("Data registred with success!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error("Failed to register data, please try again!");
      console.error(error);
    }
  };
  return (
    <>
      {" "}
      <section className="signUpBody">
        <div className="content">
          <div className="logo">
            <img className="img1" src={logo} alt="Logo" />
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
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button1" onClick={handleRegister}>
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};
export default SignUpPage;
