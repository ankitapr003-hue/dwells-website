import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* =========================================
          DWELLS LOGO
      ========================================= */}
      <div className="navbar-logo">
        <a href="/" aria-label="DWELLS Home">
          <img
  src={`${import.meta.env.BASE_URL}dwells-logo.png`}
  alt="DWELLS"
  width="160"
  height="160"
/>
        </a>
      </div>


      {/* =========================================
          NAVIGATION
      ========================================= */}
      <div className="navbar-links">

        <a
          href="#"
          className="active"
        >
          Home
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#about">
          About
        </a>

        <a href="#materials">
          Materials
        </a>

        <a href="#products">
          Products
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>


      {/* =========================================
          MOBILE MENU
      ========================================= */}
      <button
        type="button"
        className="navbar-menu-toggle"
        aria-label="Open menu"
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;