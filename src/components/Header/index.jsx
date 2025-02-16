import logo from "../../assets/logo.png";
import elementoDaPage01 from "../../assets/elementoDaPage01.png";
import "./style.css";

const Header = () => {
  return (
    <section className="header">
      <div className="content">
        <div className="logo">
          <img className="img1" src={logo} alt="Logo" />
        </div>

        <h1 className="title1">Sell online with Shopify</h1>

        <p className="p1">Trusted by millions of businesses worldwide</p>

        <div className="form">
          <input type="email" placeholder="Enter your email address" />
          <button className="button1">Start free trial</button>
        </div>

        <p className="info">
          Try Shopify free for 14 days, no credit card required. By entering
          your email, you agree to receive marketing emails from Shopify.
        </p>
      </div>

      {/* Elemento acima do SVG */}
      <img className="img2" src={elementoDaPage01} alt="Elemento" />

      {/* Onda SVG cobrindo o fundo */}
      <svg id="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgba(0, 128, 96, 1)"
          d="M0,64L24,80C48,96,96,128,144,160C192,192,240,224,288,245.3C336,267,384,277,432,272C480,267,528,245,576,229.3C624,213,672,203,720,181.3C768,160,816,128,864,133.3C912,139,960,181,1008,197.3C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,122.7C1344,96,1392,64,1416,48L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Header;
