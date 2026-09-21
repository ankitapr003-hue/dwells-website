function Contact() {
  const openWhatsApp = (type) => {
    const messages = {
      product:
        "Hello DWELLS, I have a Product Query. Please help me choose the right raw materials/products for my requirement.",

      career:
        "Hello DWELLS, I have a Career Query. Please share the current career opportunities."
    };

    const message = messages[type];

    window.open(
      `https://wa.me/919090339755?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


  const submitForm = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const project = form.project.value.trim();
    const requirement = form.requirement.value.trim();

    const subject = `DWELLS Material Enquiry - ${name}`;

    const body = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${project}

Material Requirement:
${requirement}
`;

    window.location.href =
      `mailto:info@dwells.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <section className="contact section" id="contact">

      <div className="container">

        <div className="contact-box">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <div className="contact-copy">

            <span className="kicker">
              CONTACT DWELLS
            </span>

            <h2>
              Let&apos;s build
              <br />
              <em>something strong.</em>
            </h2>

            <p>
              Tell us what you are building. Whether it is a home,
              apartment, office, commercial space, road or larger
              infrastructure project, our team can help you identify
              suitable materials and products.
            </p>


            {/* =====================================
                CONTACT DETAILS
            ===================================== */}

            <div className="contact-details">

              <div>
                <MapPin size={20} />

                <span>
                  Royal Arcade, Unit No – 111, First Floor,
                  <br />
                  Raghunathpur, Nandan Kanan Road,
                  <br />
                  Bhubaneswar, Khordha, Odisha – 751024
                </span>
              </div>


              <div>
                <Mail size={20} />

                <span>
                  info@dwells.in
                </span>
              </div>


              <div>
                <Phone size={20} />

                <span>
                  +91 9090339755
                </span>
              </div>

            </div>


            {/* =====================================
                WHATSAPP QUERY OPTIONS
            ===================================== */}

            <div className="contact-query-title">
              QUICK QUERY
            </div>

            <div className="contact-query-actions">

              <button
                type="button"
                onClick={() => openWhatsApp("product")}
              >
                <span className="query-icon">
                  📦
                </span>

                <span>
                  Product Query
                </span>

                <ArrowRight size={16} />
              </button>


              <button
                type="button"
                onClick={() => openWhatsApp("career")}
              >
                <span className="query-icon">
                  💼
                </span>

                <span>
                  Career Query
                </span>

                <ArrowRight size={16} />
              </button>

            </div>

          </div>


          {/* =====================================
              RIGHT SIDE FORM
          ===================================== */}

          <form
            className="contact-form"
            onSubmit={submitForm}
          >

            <div className="form-intro">

              <span>
                PROJECT ENQUIRY
              </span>

              <h3>
                Tell us what you need.
              </h3>

              <p>
                Share your project and material requirement.
                Our team can get back to you with the right direction.
              </p>

            </div>


            {/* NAME */}

            <label>
              Name

              <input
                name="name"
                required
                placeholder="Your name"
              />
            </label>


            {/* PHONE */}

            <label>
              Phone

              <input
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
              />
            </label>


            {/* EMAIL */}

            <label>
              Email

              <input
                name="email"
                type="email"
                placeholder="Your email address"
              />
            </label>


            {/* PROJECT */}

            <label>
              Project Type

              <select
                name="project"
                required
                defaultValue=""
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

                <option value="Bridge / Large Project">
                  Bridge / Large Project
                </option>

                <option value="Interior">
                  Interior
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </label>


            {/* REQUIREMENT */}

            <label>
              Material Requirement

              <textarea
                name="requirement"
                rows="4"
                required
                placeholder="Tell us about the materials or products you require..."
              />

            </label>


            {/* SUBMIT */}

            <button
              className="btn btn-primary form-submit"
              type="submit"
            >
              Send Enquiry

              <ArrowRight size={17} />
            </button>


            <small className="form-note">
              Your email application will open with the enquiry
              details already filled in.
            </small>

          </form>

        </div>

      </div>

    </section>
  );
}