import React from "react";
import "./MaterialSection.css";

const materialStages = [
  {
    number: "01",
    tag: "MATERIAL ARRIVAL",
    title: "Unloading & Site Supply",
    description:
      "Construction materials arrive at the site ready for the next stage of development — cement, steel, aggregates and other essential building materials.",
    materials: [
      "Cement",
      "Steel",
      "Sand",
      "Aggregates",
    ],
    image:
      "https://buildiyo.store/cdn/shop/articles/A_busy_construction_site_with_a_large_truck_deli.png?v=1757921927",
    position: "left",
  },

  {
    number: "02",
    tag: "GROUND & STRUCTURE",
    title: "Foundation & Construction",
    description:
      "Once materials reach the site, structural development begins with foundation work, concrete, reinforcement and other core construction materials.",
    materials: [
      "Concrete",
      "TMT Steel",
      "Aggregates",
      "Blocks",
    ],
    image:
      "https://images.tagesschau.de/image/74492bd0-30d0-47bf-8830-b03ecc06f804/AAABlE858yU/AAABnSStdoM/4x3/baustelle-204.jpg?width=1280",
    position: "right",
  },

  {
    number: "03",
    tag: "INFRASTRUCTURE",
    title: "Bridge & Heavy Construction",
    description:
      "Infrastructure projects depend on dependable structural materials for foundations, supports, concrete elements and large-scale construction.",
    materials: [
      "Structural Steel",
      "Concrete",
      "Aggregates",
      "Reinforcement",
    ],
    image:
      "https://gestion.pe/resizer/v2/NE6PZH6GQVFEBAGZEY7VIX3F7U.jpg?auth=c293e98ad7def5f592c59c5c415b1ff8e46b75611df775f3b1950b72107ed436&height=1200&quality=75&smart=true&width=1800",
    position: "left",
  },

  {
    number: "04",
    tag: "STRUCTURAL MATERIALS",
    title: "Building the Complete Space",
    description:
      "From steel and concrete to blocks and finishing products, each construction stage requires the right material to move the project forward.",
    materials: [
      "Steel Sections",
      "Bricks & Blocks",
      "Concrete Products",
      "Construction Materials",
    ],
    image:
      "https://aranlogistic.com/assets/img/aran-construction-logistics-hero.jpg",
    position: "right",
  },
];

const MaterialSection = () => {
  return (
    <section className="materials-section" id="materials">

      {/* =====================================================
          SECTION INTRO
      ===================================================== */}

      <div className="materials-intro">

        <div className="materials-intro-label">
          DWELLS • RAW MATERIAL SUPPLY
        </div>

        <h2>
          THE MATERIAL JOURNEY
          <span>BEHIND EVERY PROJECT</span>
        </h2>

        <p>
          From material arrival and unloading to structural construction,
          DWELLS focuses on supplying the essential raw materials required
          across residential, infrastructure and commercial projects.
        </p>

      </div>


      {/* =====================================================
          MATERIAL PROCESS
      ===================================================== */}

      <div className="materials-process">

        {/* CENTRAL PROCESS LINE */}
        <div className="process-line"></div>

        {materialStages.map((stage, index) => (

          <div
            className={`material-stage ${stage.position}`}
            key={stage.number}
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="material-image-wrapper">

              <img
                src={stage.image}
                alt={`${stage.title} - DWELLS construction materials`}
                className="material-image"
              />

              <div className="image-overlay"></div>

              <div className="image-number">
                {stage.number}
              </div>

              <div className="image-brand">
                DWELLS
              </div>

            </div>


            {/* =================================================
                CENTER NODE
            ================================================= */}

            <div className="process-node">
              <span>{stage.number}</span>
            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="material-content">

              <div className="material-tag">
                {stage.tag}
              </div>

              <h3>
                {stage.title}
              </h3>

              <p>
                {stage.description}
              </p>


              {/* MATERIALS USED */}

              <div className="materials-used">

                <span className="materials-used-title">
                  REQUIRED MATERIALS
                </span>

                <div className="material-pills">

                  {stage.materials.map((material) => (
                    <span
                      className="material-pill"
                      key={material}
                    >
                      {material}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          BOTTOM MESSAGE
      ===================================================== */}

      <div className="materials-bottom">

        <div className="bottom-line"></div>

        <div className="bottom-content">

          <div className="bottom-number">
            05
          </div>

          <div>
            <span>
              COMPLETE MATERIAL CHAIN
            </span>

            <h3>
              MATERIALS THAT MOVE PROJECTS FORWARD
            </h3>

            <p>
              DWELLS supplies the materials behind the process —
              from essential construction inputs to products required
              for the finished space.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MaterialSection;