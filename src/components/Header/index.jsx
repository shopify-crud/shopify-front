import { Avatar, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import elementoDaPage01 from "../../assets/elementoDaPage01.png";
import logo from "../../assets/logo.png";
import "./style.css";
import { getUsuarioById } from "../../services/requestUser";

const Header = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log("ID recebido da URL:", id);

    const getDataUser = async () => {
      try {
        if (!id) return;

        const userData = await getUsuarioById(id);
        console.log("Dados do usuário:", userData);
        if (userData?.data.nome) {
          setUserName(userData.data.nome);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    getDataUser();
  }, [id]);
  
  const handleStartFreeTrial = () => {
    if (email) {
      navigate(`/login?email=${email}`);
    } else {
      toast.warning("Please enter your email.");
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .trim()
      .split(" ")
      .filter((n) => n)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="header">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img className="img1" src={logo} alt="Logo" />
          </Link>
          {id ? (
            <div className="avatarContainer">
              <Tooltip title={userName}>
                <Avatar>{userName ? getInitials(userName) : "?"}</Avatar>
              </Tooltip>
              <p>Welcome, {userName}!</p>
            </div>
          ) : (
            ""
          )}
        </div>

        <h1 className="title1">Sell online with Shopify</h1>
        <p className="p1">Trusted by millions of businesses worldwide</p>

        <div className="form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
