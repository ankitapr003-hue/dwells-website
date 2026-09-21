import "./ProductCard.css";

function ProductCard({ number, title, description }) {
  return (
    <article className="product-card">

      <div className="product-card-top">
        <span>{number}</span>

        <div className="product-card-icon">
          ↗
        </div>
      </div>

      <div className="product-card-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      <a href="#contact" className="product-card-link">
        Enquire Now
        <span>→</span>
      </a>

    </article>
  );
}

export default ProductCard;