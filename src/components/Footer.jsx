function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-main">

        <div className="footer-brand">

          <img
            src="/dwells-logo.png"
            alt="DWELLS"
          />

          <p>
            Quality raw materials and construction solutions
            for better spaces and better possibilities.
          </p>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#materials">Materials</a>
          <a href="#projects">Projects</a>

        </div>

        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column footer-contact">

          <h4>Contact</h4>

          <p>
            Royal Arcade, Unit No – 111,
            First Floor, Raghunathpur,
            Nandan Kanan Road,
            Bhubaneswar, Odisha – 751024
          </p>

          <a href="mailto:info@dwells.in">
            info@dwells.in
          </a>

          <a href="tel:+919090339755">
            +91 9090339755
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 DWELLS. All Rights Reserved.
        </span>

        <span>
          WE DELIVER YOUR DREAM
        </span>

      </div>

    </footer>
  );
}

export default Footer;