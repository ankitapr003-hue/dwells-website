import React, { useEffect, useState } from "react";
import "./ProjectShowcase.css";

const slides = [
  {
    number: "01",
    category: "MATERIAL UNLOADING",
    title: "RAW MATERIALS",
    highlight: "ARRIVE AT SITE.",
    description:
      "Construction materials are transported and unloaded at the required project location, ready for the next stage.",
    materials: "CEMENT • STEEL • BRICKS • SITE MATERIALS",
    image:
      "https://images.pexels.com/photos/36782689/pexels-photo-36782689/free-photo-of-construction-workers-unloading-materials-at-building-site.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt:
      "Construction workers unloading building materials from a delivery truck at a project site",
  },

  {
    number: "02",
    category: "APARTMENT CONSTRUCTION",
    title: "MATERIALS FOR",
    highlight: "RESIDENTIAL PROJECTS.",
    description:
      "Residential developments depend on a continuous supply of structural and building materials throughout the project.",
    materials: "TMT STEEL • CEMENT • BLOCKS • AGGREGATES",
    image:
      "https://images.pexels.com/photos/7459407/pexels-photo-7459407.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt:
      "Residential apartment building under construction with tower crane",

    secondaryImages: [
      {
        src:
          "https://images.pexels.com/photos/36782689/pexels-photo-36782689/free-photo-of-construction-workers-unloading-materials-at-building-site.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:
          "Construction workers unloading raw building materials from a truck",
      },
      {
        src:
          "https://images.pexels.com/photos/9937651/pexels-photo-9937651.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:
          "Bridge construction site with cranes and infrastructure equipment",
      },
    ],
  },

  {
    number: "03",
    category: "RAW MATERIAL DELIVERY",
    title: "MATERIALS",
    highlight: "REACH THE SITE.",
    description:
      "From bulk aggregates and steel to essential construction materials, DWELLS focuses on supplying and moving the materials required at the project location.",
    materials:
      "CEMENT • TMT STEEL • SAND • AGGREGATES • BRICKS • BLOCKS",
    image:
      "https://images.pexels.com/photos/35177799/pexels-photo-35177799/free-photo-of-construction-site-with-dump-truck-tipping-stones.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt:
      "Dump truck unloading bulk construction stones and aggregates at a project site",

    secondaryImages: [
      {
        src:
          "https://images.pexels.com/photos/36782689/pexels-photo-36782689/free-photo-of-construction-workers-unloading-materials-at-building-site.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:
          "Raw building materials being unloaded at a construction project",
      },
      {
        src:
          "https://images.pexels.com/photos/9937651/pexels-photo-9937651.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:
          "Bridge construction environment showing infrastructure development",
      },
    ],
  },

  {
    number: "04",
    category: "BULK MATERIAL DELIVERY",
    title: "FROM LOAD",
    highlight: "TO PROJECT SITE.",
    description:
      "Bulk construction materials such as stone and aggregates are transported toward active infrastructure and development sites.",
    materials: "AGGREGATES • STONE • BULK MATERIAL • TRANSPORT",
    image:
      "https://images.pexels.com/photos/29174547/pexels-photo-29174547.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt:
      "Bulk aggregates and construction materials being transported to an active project site",
  },
];

const ProjectShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      className="project-showcase"
      id="projects"
      aria-label="DWELLS raw materials and construction product supply showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="project-slides">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div
              key={slide.number}
              className={`project-slide ${isActive ? "active" : ""}`}
              aria-hidden={!isActive}
            >
              {/* MAIN VISUAL */}
              <div className="project-slide-visual">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  width="1920"
                  height="1080"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="project-slide-image"
                />

                {/* SECONDARY IMAGES */}
                {slide.secondaryImages?.length > 0 && (
                  <div className="project-secondary-images">
                    {slide.secondaryImages.map((item, imageIndex) => (
                      <div
                        className={`secondary-image secondary-image-${
                          imageIndex + 1
                        }`}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          width="800"
                          height="533"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* IMAGE OVERLAYS */}
              <div className="project-image-overlay"></div>
              <div className="project-image-gradient"></div>

              {/* SLIDE NUMBER */}
              <div className="project-slide-number">
                {slide.number}
              </div>

              {/* BRAND */}
              <div className="project-slide-brand">
                DWELLS
              </div>

              {/* MAIN CONTENT */}
              <div className="project-slide-content">
                <span className="project-slide-category">
                  {slide.category}
                </span>

                <h2>
                  {slide.title}
                  <span>{slide.highlight}</span>
                </h2>

                <p>{slide.description}</p>

                <div className="project-materials">
                  {slide.materials}
                </div>
              </div>

              {/* DWELLS ROLE */}
              <div className="slide-role">
                <span className="role-label">
                  DWELLS ROLE
                </span>

                <strong>
                  MATERIAL SUPPLY
                </strong>

                <small>
                  RAW MATERIALS • TRANSPORT • DELIVERY
                </small>
              </div>
            </div>
          );
        })}
      </div>

      {/* PREVIOUS */}
      <button
        className="project-arrow project-prev"
        onClick={previousSlide}
        type="button"
        aria-label="Previous project slide"
      >
        ←
      </button>

      {/* NEXT */}
      <button
        className="project-arrow project-next"
        onClick={nextSlide}
        type="button"
        aria-label="Next project slide"
      >
        →
      </button>

      {/* BOTTOM NAVIGATION */}
      <div className="project-navigation">
        <div className="project-progress">
          {slides.map((slide, index) => (
            <button
              key={slide.number}
              type="button"
              className={`progress-item ${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to project slide ${index + 1}`}
              aria-current={
                index === activeSlide ? "true" : undefined
              }
            >
              <span>{slide.number}</span>
              <i></i>
            </button>
          ))}
        </div>

        {/* SUPPLY FLOW */}
        <div className="project-flow-text">
          <span>MATERIALS</span>
          <span className="flow-arrow">→</span>
          <span>LOADING</span>
          <span className="flow-arrow">→</span>
          <span>TRANSPORT</span>
          <span className="flow-arrow">→</span>
          <span>UNLOADING</span>
          <span className="flow-arrow">→</span>
          <span>PROJECT SITE</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;