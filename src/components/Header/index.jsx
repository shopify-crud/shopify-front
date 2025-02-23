import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import elementoDaPage01 from "../../assets/elementoDaPage01.png";
import "./style.css";
import { toast } from "react-toastify";
import { Avatar } from "antd";
import { getUsuarioById } from "../../services/requestUser";

const Header = () => {
  const { id } = useParams();
  const [email, setEmail] = useState(""); // Email do input no header
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleStartFreeTrial = () => {
    if (email) {
      navigate(`/login?email=${email}`);
    } else {
      toast.warning("Please enter your email.");
    }
  };

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const userData = await getUsuarioById(id); // Chama a função com o id
        setUserName(userData.nome);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    if (id) {
      getDataUser();
    }
  }, [id]);

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    return nameParts.map((part) => part.charAt(0).toUpperCase()).join("");
  };

  return (
    <section className="header">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img className="img1" src={logo} alt="Logo" />
          </Link>
          <Avatar>{userName ? getInitials(userName) : "?"}</Avatar>
        </div>

        <h1 className="title1">Sell online with Shopify</h1>
        <p className="p1">Trusted by millions of businesses worldwide</p>

        <div className="form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
          />
          <button className="button1" onClick={handleStartFreeTrial}>
            Start free trial
          </button>
        </div>

        <p className="info">
          Try Shopify free for 14 days, no credit card required. By entering
          your email, you agree to receive marketing emails from Shopify.
        </p>
      </div>

      <img className="img2" src={elementoDaPage01} alt="Elemento" />
    </section>
  );
};

export default Header;
