import { useState } from "react";

import EntryAnimation from "./components/EntryAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import MaterialSection from "./components/MaterialSection";
import ProductSection from "./components/ProductSection";
import CompanyStory from "./components/CompanyStory";
import CEOSection from "./components/CEOSection";
import WhatsAppQuery from "./components/WhatsAppQuery";
import SEO from "./components/SEO";

import "./App.css";


/* =====================================================
   CONTACT SECTION
===================================================== */

function ContactSection() {
  const whatsappNumber = "919090339755";

  const openWhatsApp = (type) => {
    let message = "";

    if (type === "product") {
      message =
        "Hello DWELLS, I have a Product Query. Please share details about your available products and raw materials.";
    }

    if (type === "career") {
      message =
        "Hello DWELLS, I have a Career Query. Please share the current career opportunities.";
    }

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  };


  const submitEnquiry = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const project = form.project.value;
    const requirement = form.requirement.value;

    const subject = "DWELLS Project Enquiry - " + name;

    const body = `
Name: ${name}

Phone: ${phone}

Email: ${email}

Project Type: ${project}

Material Requirement:
${requirement}
`;

    window.location.href =
      "mailto:info@dwells.in" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };


  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">


        {/* =========================================
            LEFT
        ========================================= */}
        

        <div className="contact-left">

          <div className="contact-label">
            CONTACT DWELLS
          </div>

          <h2>
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span>STRONG.</span>
          </h2>

          <p className="contact-description">
            Tell us what you are building. DWELLS provides material
            solutions for residential, apartment, commercial,
            infrastructure and interior requirements.
          </p>


          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-detail-icon">
                📍
              </div>

              <div>
                <strong>ADDRESS</strong>

                <p>
                  Royal Arcade, Unit No – 111,
                  <br />
                  Raghunathpur, Patia,
                  <br />
                  Bhubaneswar, Odisha – 751024
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-detail-icon">
                ✉
              </div>

              <div>
                <strong>EMAIL</strong>

                <p>
                  info@dwells.in
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-detail-icon">
                ☎
              </div>

              <div>
                <strong>PHONE</strong>

                <p>
                  +91 9090339755
                </p>
              </div>

            </div>

          </div>


          {/* QUICK WHATSAPP QUERY */}

          <div className="contact-query">

            <div className="contact-query-title">
              QUICK QUERY
            </div>

            <div className="contact-query-buttons">

              <button
                type="button"
                onClick={() => openWhatsApp("product")}
              >
                <span>📦</span>
                Product Query
                <b>→</b>
              </button>


              <button
                type="button"
                onClick={() => openWhatsApp("career")}
              >
                <span>💼</span>
                Career Query
                <b>→</b>
              </button>

            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT FORM
        ========================================= */}

        <div className="contact-right">

          <form
            className="contact-form"
            onSubmit={submitEnquiry}
          >

            <div className="contact-form-kicker">
              PROJECT ENQUIRY
            </div>

            <h3>
              Tell us what you need.
            </h3>

            <p>
              Share your project requirements and the materials
              or products you are looking for.
            </p>


            <label>
              Name

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>


            <label>
              Phone

              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>


            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
              />
            </label>


            <label>
              Project Type

              <select
                name="project"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select project type
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Office">
                  Office
                </option>

                <option value="Road / Infrastructure">
                  Road / Infrastructure
                </option>

                <option value="Bridge">
                  Bridge
                </option>

                <option value="Interior">
                  Interior
                </option>

                <option value="Other">
                  Other
                </option>

              </select>
            </label>


            <label>
              Material Requirement

              <textarea
                name="requirement"
                rows="4"
                placeholder="What material or product do you require?"
                required
              ></textarea>

            </label>


            <button
              type="submit"
              className="contact-submit"
            >
              SEND ENQUIRY
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}


/* =====================================================
   FOOTER
===================================================== */

function Footer() {
  return (
    <footer className="dwells-footer">

      <div className="footer-inner">

        <div className="footer-brand">

          <img
            src="/dwells-logo.png"
            alt="DWELLS"
          />

          <p>
            Quality materials. Better spaces.
          </p>

        </div>


        <div className="footer-links">

          <a href="#">Home</a>

          <a href="#projects">Projects</a>

          <a href="#about">About</a>

          <a href="#materials">Materials</a>

          <a href="#products">Products</a>

          <a href="#contact">Contact</a>

        </div>

      </div>


      <div className="footer-bottom">
        © {new Date().getFullYear()} DWELLS. All rights reserved.
      </div>

    </footer>
  );
}


/* =====================================================
   MAIN APP
===================================================== */

function App() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <>
      {/* =========================================
          ENTRY ANIMATION
      ========================================= */}

      {showEntry && (
        <EntryAnimation
          onFinish={() => setShowEntry(false)}
        />
      )}


      {/* =========================================
          MAIN WEBSITE
      ========================================= */}

      <div className="app">
        <SEO
  title="DWELLS | Raw Materials & Construction Products"
  description="DWELLS supplies quality raw materials and construction products for residential, commercial and infrastructure projects."
  keywords="DWELLS, raw materials supplier, construction materials, building materials, cement, TMT steel, sand, aggregates, bricks, blocks, tiles"
  image="/dwells-logo.png"
  url="https://www.dwells.in/"
/>

        {/* ONE NAVBAR ONLY */}
        <Navbar />


        <main>

          {/* 01 */}
          <Hero />


          {/* 02 */}
          <ProjectShowcase />


          {/* 03 */}
          <MaterialSection />


          {/* 04 */}
          <ProductSection />


          {/* 05 */}
          <CompanyStory />


          {/* 06 */}
          <CEOSection />


          {/* 07 */}
          <ContactSection />

        </main>


        {/* 08 */}
        <Footer />


        {/* FLOATING WHATSAPP */}
        <WhatsAppQuery />

      </div>
    </>
  );
}

export default App;