

const Header = () => {
  return (
    <>
      <section className="header">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 128, 96, 1)" offset="0%" />
              <stop stopColor="rgba(0, 128, 96, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,392L60,343C120,294,240,196,360,204.2C480,212,600,327..."
          ></path>
        </svg>
        <div className="logo">
          <img className="img1" src="./assets/logo.png" alt="Logo" />
        </div>
        <div>
          <div className="title1">
            <h1>Sell Online With Shopify!</h1>
          </div>
          <div className="p1">
            <p>Trusted By Millions Of Businesses Worldwide.</p>
          </div>
          <div className="form">
            <input type="email" placeholder="Enter your email address" />
            <button className="button1">Start free trial</button>
          </div>
          <div className="p2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              suscipit!
            </p>
          </div>
        </div>
        <div>
          <img className="img2" src="./assets/elementoDaPage01.png" alt="Elemento" />
        </div>
      </section>
    </>
  );
};

export default Header;
