import "./CEOSection.css";

function CEOSection() {
  return (
    <section className="ceo-section">

      <div className="ceo-background">
        <div className="ceo-background-image"></div>
        <div className="ceo-background-overlay"></div>
      </div>

      <div className="ceo-content">

        <div className="ceo-label">
          LEADERSHIP • DWELLS
        </div>

        <div className="ceo-layout">

          {/* LEFT */}
          <div className="ceo-heading">

            <h2>
              BUILDING
              <br />
              WITH
              <br />
              <span>PURPOSE.</span>
            </h2>

            <div className="ceo-gold-line"></div>

            <p className="ceo-heading-note">
              Strong materials.
              <br />
              Responsible development.
              <br />
              Better spaces.
            </p>

          </div>


          {/* RIGHT */}
          <div className="ceo-info">

            {/* CEO PHOTO ONLY */}
            <div className="ceo-image-wrapper">

              <img
                src="/Images/CEO/ceo-photo.png"
                alt="DWELLS CEO"
                className="ceo-image"
              />

              <div className="ceo-image-overlay"></div>

              <div className="ceo-image-label">
                DWELLS
              </div>

            </div>


            {/* CEO TEXT */}
            <div className="ceo-text">

              <span className="ceo-role">
                FOUNDER & CEO
              </span>

              <h3>
                Pramodh Bharat
              </h3>

              <p>
                At DWELLS, our vision is to make quality raw materials
                more accessible and dependable for modern development.
              </p>

              <p>
                We believe that every successful space begins with the
                right foundation — reliable materials, consistent quality
                and a commitment to better construction.
              </p>

              <p>
                Our focus is simple: connect customers with dependable
                material solutions that support residential, commercial
                and infrastructure requirements.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CEOSection;