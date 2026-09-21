import { useState } from "react";
import "./WhatsAppQuery.css";

function WhatsAppQuery() {
  const [open, setOpen] = useState(false);

  // Replace this with the DWELLS WhatsApp number.
  // Use country code without + or spaces.
  const whatsappNumber = "919090339755";

  const handleQuery = (type) => {
    let message = "";

    if (type === "product") {
      message =
        "Hello DWELLS, I have a Product Query. I would like to know more about your raw materials and products.";
    }

    if (type === "career") {
      message =
        "Hello DWELLS, I have a Career Query. I would like to know about current career opportunities at DWELLS.";
    }

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-query">

      {/* QUERY PANEL */}

      {open && (
        <div className="whatsapp-panel">

          <div className="whatsapp-panel-header">
            <div>
              <span className="whatsapp-status"></span>
              <strong>DWELLS WhatsApp</strong>
            </div>

            <button
              className="whatsapp-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>


          <div className="whatsapp-panel-body">

            <h3>How can we help?</h3>

            <p>
              Select your query and connect with the DWELLS team.
            </p>


            {/* PRODUCT QUERY */}

            <button
              className="whatsapp-query-option"
              onClick={() => handleQuery("product")}
            >
              <span className="query-icon">📦</span>

              <span className="query-content">
                <strong>Product Query</strong>
                <small>
                  Ask about materials, products, availability or requirements.
                </small>
              </span>

              <span className="query-arrow">→</span>
            </button>


            {/* CAREER QUERY */}

            <button
              className="whatsapp-query-option"
              onClick={() => handleQuery("career")}
            >
              <span className="query-icon">💼</span>

              <span className="query-content">
                <strong>Career Query</strong>
                <small>
                  Ask about jobs, internships or career opportunities.
                </small>
              </span>

              <span className="query-arrow">→</span>
            </button>

          </div>


          <div className="whatsapp-panel-footer">
            DWELLS • Quality Materials • Better Spaces
          </div>

        </div>
      )}


      {/* FLOATING WHATSAPP BUTTON */}

      <button
        className={`whatsapp-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open DWELLS WhatsApp"
      >
        {open ? (
          <span className="whatsapp-x">×</span>
        ) : (
          <span className="whatsapp-symbol">◉</span>
        )}

        {!open && <span className="whatsapp-pulse"></span>}
      </button>

    </div>
  );
}

export default WhatsAppQuery;