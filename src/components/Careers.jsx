import "./Careers.css";

function Careers() {
  return (
    <div className="careers-page">

      {/* HERO */}
      <section className="careers-hero">

        <div className="careers-hero-overlay"></div>

        <div className="careers-hero-content">

          <p>CAREERS AT DWELLS</p>

          <h1>
            Build Your
            <br />
            <span>Future With Us.</span>
          </h1>

          <p className="careers-intro">
            Join a growing team working to make quality building
            materials more accessible, reliable and convenient.
          </p>

          <a href="#openings" className="career-button">
            Explore Opportunities ↓
          </a>

        </div>

      </section>


      {/* INTRO */}
      <section className="career-intro-section">

        <div className="career-intro-title">

          <span>WHY DWELLS</span>

          <h2>
            Grow with a company
            <br />
            building possibilities.
          </h2>

        </div>

        <div className="career-intro-text">

          <p>
            At DWELLS, we believe that strong businesses are built
            by strong people. We are creating a professional
            environment where people can learn, contribute and
            grow together.
          </p>

          <p>
            From building-material sourcing and product management
            to sales, technology and operations, there are
            opportunities to become part of our journey.
          </p>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="career-benefits">

        <div className="career-section-heading">

          <span>THE DWELLS CULTURE</span>

          <h2>
            More than a job.
          </h2>

        </div>

        <div className="benefit-grid">

          <div className="benefit-card">
            <strong>01</strong>
            <h3>Learn & Grow</h3>
            <p>
              Develop practical skills while working on
              real business challenges.
            </p>
          </div>

          <div className="benefit-card">
            <strong>02</strong>
            <h3>Collaborate</h3>
            <p>
              Work with people across business, sales,
              operations and technology.
            </p>
          </div>

          <div className="benefit-card">
            <strong>03</strong>
            <h3>Make an Impact</h3>
            <p>
              Contribute ideas that can improve how
              customers discover and source materials.
            </p>
          </div>

          <div className="benefit-card">
            <strong>04</strong>
            <h3>Build the Future</h3>
            <p>
              Be part of a growing company working around
              the building-material ecosystem.
            </p>
          </div>

        </div>

      </section>


      {/* OPEN POSITIONS */}
      <section className="openings" id="openings">

        <div className="career-section-heading">

          <span>JOIN OUR TEAM</span>

          <h2>
            Current Opportunities
          </h2>

          <p>
            We are always interested in meeting talented
            people who want to grow with DWELLS.
          </p>

        </div>


        <div className="job-list">

          <div className="job-card">

            <div>
              <span className="job-type">
                SALES
              </span>

              <h3>
                Sales Executive
              </h3>

              <p>
                Help customers discover the right products
                and building-material solutions.
              </p>
            </div>

            <a href="#apply">
              Apply →
            </a>

          </div>


          <div className="job-card">

            <div>
              <span className="job-type">
                OPERATIONS
              </span>

              <h3>
                Operations Executive
              </h3>

              <p>
                Support product coordination, orders,
                inventory and customer requirements.
              </p>
            </div>

            <a href="#apply">
              Apply →
            </a>

          </div>


          <div className="job-card">

            <div>
              <span className="job-type">
                TECHNOLOGY
              </span>

              <h3>
                Digital / Technology Executive
              </h3>

              <p>
                Help improve DWELLS through digital tools,
                data and technology.
              </p>
            </div>

            <a href="#apply">
              Apply →
            </a>

          </div>


          <div className="job-card">

            <div>
              <span className="job-type">
                BUSINESS
              </span>

              <h3>
                Business Development Executive
              </h3>

              <p>
                Develop relationships with customers,
                businesses and project stakeholders.
              </p>
            </div>

            <a href="#apply">
              Apply →
            </a>

          </div>

        </div>

      </section>


      {/* APPLICATION */}
      <section className="career-apply" id="apply">

        <div className="apply-content">

          <span>DON'T SEE YOUR ROLE?</span>

          <h2>
            Send us your
            <br />
            profile anyway.
          </h2>

          <p>
            Tell us about yourself, your skills and how you
            would like to contribute to DWELLS.
          </p>

          <a
            href="mailto:info@dwells.in?subject=Career Application - DWELLS"
            className="career-button"
          >
            Send Your Resume →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Careers;