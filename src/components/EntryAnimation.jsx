import { useEffect, useState } from "react";
import "./EntryAnimation.css";

function EntryAnimation({ onComplete }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Start the exit/fade after the vehicle finishes crossing.
    const exitTimer = setTimeout(() => {
      setLeaving(true);
    }, 3200);

    // Remove the opening screen completely.
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 4000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`entry-screen ${leaving ? "entry-leaving" : ""}`}>

      {/* =========================================
          BACKGROUND
      ========================================= */}
      <div className="entry-background">

        <div className="entry-grid"></div>

        <div className="entry-glow"></div>

      </div>


      {/* =========================================
          BRAND
      ========================================= */}
      <div className="entry-brand">

  <img
    src="/dwells-logo.png"
    alt="DWELLS"
    className="entry-logo"
  />

  <p className="entry-tagline">
    QUALITY MATERIALS • BETTER SPACES
  </p>

</div>


      {/* =========================================
          ROAD
      ========================================= */}
      <div className="entry-road">

        <div className="road-line road-line-1"></div>
        <div className="road-line road-line-2"></div>
        <div className="road-line road-line-3"></div>
        <div className="road-line road-line-4"></div>

      </div>


      {/* =========================================
          CONSTRUCTION VEHICLE
      ========================================= */}
      <div className="entry-vehicle">

        <div className="vehicle-shadow"></div>

        <div className="truck">

          {/* Truck cabin */}
          <div className="truck-cabin">

            <div className="truck-window"></div>

            <div className="truck-door-line"></div>

            <div className="truck-handle"></div>

            <div className="truck-light"></div>

          </div>


          {/* Material container */}
          <div className="truck-load">

            <div className="material-piece piece-1"></div>
            <div className="material-piece piece-2"></div>
            <div className="material-piece piece-3"></div>
            <div className="material-piece piece-4"></div>
            <div className="material-piece piece-5"></div>

          </div>


          {/* Truck body */}
          <div className="truck-body">

            <span>DWELLS</span>

          </div>


          {/* Wheels */}
          <div className="truck-wheel wheel-front">
            <div className="wheel-inner"></div>
          </div>

          <div className="truck-wheel wheel-back">
            <div className="wheel-inner"></div>
          </div>

        </div>

      </div>


      {/* =========================================
          LOADING TEXT
      ========================================= */}
      <div className="entry-loading">

        <span className="loading-line"></span>

        <span>
          BUILDING YOUR EXPERIENCE
        </span>

        <span className="loading-dots">
          ...
        </span>

      </div>


      {/* =========================================
          FINAL FADE
      ========================================= */}
      <div className="entry-fade"></div>

    </div>
  );
}

export default EntryAnimation;