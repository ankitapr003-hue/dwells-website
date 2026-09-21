import React from "react";
import "./ProductSection.css";

const supplyStages = [
  {
    number: "01",
    title: "SELECT",
    text: "Quality materials are selected according to project requirements.",
    items: ["Cement", "Steel", "Aggregates"],
  },
  {
    number: "02",
    title: "PREPARE",
    text: "Materials are organized and prepared for safe movement to the project site.",
    items: ["Bricks", "Blocks", "Concrete Products"],
  },
  {
    number: "03",
    title: "LOAD",
    text: "Required materials are loaded for efficient movement and delivery.",
    items: ["Bulk Materials", "Steel Sections", "Finishing Products"],
  },
  {
    number: "04",
    title: "DELIVER",
    text: "Materials reach the required construction location ready for the next stage.",
    items: ["Residential", "Infrastructure", "Commercial"],
  },
];

const ProductSection = () => {
  return (
    <section className="dwells-supply" id="supply">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="supply-header">

        <span className="supply-eyebrow">
          DWELLS • MATERIAL SUPPLY SYSTEM
        </span>

        <h2>
          WE SUPPLY THE
          <span> MATERIALS BEHIND THE PROJECT</span>
        </h2>

        <p>
          DWELLS focuses on supplying dependable raw materials and
          construction products required across different stages of
          residential, infrastructure and commercial development.
        </p>

      </div>


      {/* =====================================================
          MAIN VISUAL SYSTEM
      ===================================================== */}

      <div className="supply-system">

        {/* TOP LABELS */}

        <div className="system-label source-label">
          MATERIAL SOURCE
        </div>

        <div className="system-label site-label">
          PROJECT SITE
        </div>


        {/* LEFT MATERIAL DEPOT */}

        <div className="material-depot">

          <div className="depot-roof"></div>

          <div className="depot-building">

            <div className="depot-sign">
              DWELLS
            </div>

            <div className="depot-title">
              MATERIAL
              <br />
              SUPPLY
            </div>

            <div className="depot-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          {/* STACKED MATERIALS */}

          <div className="material-stack stack-one">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="material-stack stack-two">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="steel-bundle">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        {/* =================================================
            CONNECTING SUPPLY LINE
        ================================================= */}

        <div className="supply-road">

          <div className="road-line"></div>

          {/* moving material blocks */}

          <div className="moving-material material-one">
            STEEL
          </div>

          <div className="moving-material material-two">
            CEMENT
          </div>

          <div className="moving-material material-three">
            AGGREGATE
          </div>

        </div>


        {/* =================================================
            DELIVERY TRUCK
        ================================================= */}

        <div className="supply-truck">

          <div className="truck-body">
            <span>DWELLS</span>
            <small>MATERIAL SUPPLY</small>
          </div>

          <div className="truck-cabin">
            <div className="truck-window"></div>
          </div>

          <div className="truck-wheel wheel-one"></div>
          <div className="truck-wheel wheel-two"></div>

        </div>


        {/* =================================================
            PROJECT SITE
        ================================================= */}

        <div className="project-site">

          <div className="site-ground"></div>

          <div className="building-frame">

            <div className="building-floor floor-one"></div>
            <div className="building-floor floor-two"></div>
            <div className="building-floor floor-three"></div>
            <div className="building-floor floor-four"></div>

            <div className="building-column column-one"></div>
            <div className="building-column column-two"></div>
            <div className="building-column column-three"></div>

          </div>

          {/* MATERIAL STACK AT SITE */}

          <div className="site-material-stack">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>


      {/* =====================================================
          PROCESS CHAIN
      ===================================================== */}

      <div className="supply-chain">

        {supplyStages.map((stage, index) => (
          <React.Fragment key={stage.number}>

            <div className="supply-step">

              <div className="step-number">
                {stage.number}
              </div>

              <div className="step-content">

                <span className="step-title">
                  {stage.title}
                </span>

                <p>
                  {stage.text}
                </p>

                <div className="step-items">

                  {stage.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {index < supplyStages.length - 1 && (
              <div className="chain-arrow">
                →
              </div>
            )}

          </React.Fragment>
        ))}

      </div>


      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <div className="supply-statement">

        <div className="statement-mark"></div>

        <div>
          <span>
            DWELLS MATERIAL PROMISE
          </span>

          <h3>
            THE RIGHT MATERIAL.
            <br />
            AT THE RIGHT PROJECT STAGE.
          </h3>

          <p>
            From essential structural materials to products used for
            exterior and interior finishing, DWELLS is focused on
            material supply — not construction services.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ProductSection;