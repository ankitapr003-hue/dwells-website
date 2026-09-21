import "./CompanyStory.css";

function CompanyStory() {
  return (
    <section className="company-story" id="about">

      {/* LEFT SIDE — KEEPING THE MAIN HEADING */}
      <div className="company-story-left">

        <div className="company-story-label">
          ABOUT DWELLS
        </div>

        <h2>
          Building the
          <br />
          <span>foundation of</span>
          <br />
          <span>development.</span>
        </h2>

      </div>


      {/* RIGHT SIDE */}
      <div className="company-story-right">

        <p className="company-story-description">
          DWELLS is focused on making quality raw materials and
          construction products more accessible, dependable and easier
          to source for modern development.
        </p>

        <p className="company-story-description secondary">
          We bring together reliable materials, practical product
          solutions and a quality-focused approach to support projects
          from their foundation to completion.
        </p>


        {/* DWELLS HIGHLIGHTS */}
        <div className="dwells-highlights">

          <div className="dwells-highlight">
            <div className="highlight-icon">🏗️</div>

            <div>
              <h3>BUILT FOR DEVELOPMENT</h3>
              <p>
                Materials selected to support residential,
                commercial and infrastructure requirements.
              </p>
            </div>
          </div>


          <div className="dwells-highlight">
            <div className="highlight-icon">🧱</div>

            <div>
              <h3>QUALITY MATERIALS</h3>
              <p>
                Reliable construction products focused on
                strength, durability and performance.
              </p>
            </div>
          </div>


          <div className="dwells-highlight">
            <div className="highlight-icon">✓</div>

            <div>
              <h3>DEPENDABLE SOURCING</h3>
              <p>
                Helping customers find suitable materials
                for different project requirements.
              </p>
            </div>
          </div>


          <div className="dwells-highlight">
            <div className="highlight-icon">🏢</div>

            <div>
              <h3>FOR MODERN SPACES</h3>
              <p>
                Supporting homes, offices, commercial spaces
                and evolving urban environments.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CompanyStory;