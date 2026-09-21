import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}

      <div className="hero-left">

        <div className="hero-eyebrow">
          DWELLS • PROJECT ENVIRONMENTS
        </div>


        <h1>
          WHY DWELLS
          <br />

          <span className="hero-green">
            RAW MATERIALS
          </span>

          <br />

          <span className="hero-gold">
            BUILD A
          </span>

          <br />

          <span className="hero-gold">
            BETTER TOMORROW
          </span>
        </h1>


        <p className="hero-description">
          We source premium, reliable and sustainable raw materials
          to help you build stronger, safer and longer-lasting spaces.
        </p>


        {/* =====================================
            WHY DWELLS
        ===================================== */}

        <div className="why-dwells-grid">

          <div className="why-feature">

            <div
              className="feature-icon"
              aria-hidden="true"
            >
              ◇
            </div>

            <h3>
              PREMIUM QUALITY
            </h3>

            <p>
              Only the best
              <br />
              for lasting strength.
            </p>

          </div>


          <div className="why-feature">

            <div
              className="feature-icon"
              aria-hidden="true"
            >
              ◇
            </div>

            <h3>
              SUSTAINABLE SOURCING
            </h3>

            <p>
              Responsibly sourced
              <br />
              for a greener future.
            </p>

          </div>


          <div className="why-feature">

            <div
              className="feature-icon"
              aria-hidden="true"
            >
              ♧
            </div>

            <h3>
              TRUSTED PARTNER
            </h3>

            <p>
              Building relationships
              <br />
              that last.
            </p>

          </div>


          <div className="why-feature">

            <div
              className="feature-icon"
              aria-hidden="true"
            >
              ▣
            </div>

            <h3>
              ON-TIME SUPPLY
            </h3>

            <p>
              Your projects,
              <br />
              our priority.
            </p>

          </div>

        </div>


        {/* =====================================
            BUTTONS
        ===================================== */}

        <div className="hero-buttons">

          <a
            href="#materials"
            className="hero-explore-button"
          >
            <strong>
              Explore Materials
            </strong>

            <small>
              SCROLL TO EXPLORE
            </small>
          </a>


          <a
            href="#contact"
            className="hero-contact-button"
          >
            Contact Us
          </a>

        </div>

      </div>


      {/* =========================================
          RIGHT TRANSPORT / MATERIAL IMAGE
      ========================================= */}

      <div className="hero-visual">

        <img
          src="/Images/Hero/dwells-material-delivery.webp"
          alt="Construction materials being transported and delivered to a project site by DWELLS"
          width="1200"
          height="800"
          fetchPriority="high"
          decoding="async"
          className="hero-transport-image"
        />

        <div
          className="hero-image-overlay"
          aria-hidden="true"
        ></div>


        {/* =====================================
            TOP LABEL
        ===================================== */}

        <div className="hero-visual-label">

          <span>
            DWELLS SUPPLY
          </span>

          <small>
            CONSTRUCTION MATERIAL DELIVERY
          </small>

        </div>


        {/* =====================================
            BOTTOM STATUS
        ===================================== */}

        <div className="hero-visual-status">

          <div
            className="status-indicator"
            aria-hidden="true"
          ></div>

          <div>

            <strong>
              MATERIAL DELIVERY
            </strong>

            <small>
              READY FOR PROJECT SUPPLY
            </small>

          </div>

        </div>


        {/* =====================================
            QUALITY
        ===================================== */}

        <div className="hero-quality-badge">

          <small>
            QUALITY
          </small>

          <strong>
            100%
          </strong>

        </div>

      </div>

    </section>
  );
}

export default Hero;