function ProductDetails({ product, onClose }) {
  if (!product) return null

  return (
    <div className="product-details-overlay">

      <div className="product-details">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <div className="details-image">
          PRODUCT IMAGE
        </div>

        <div className="details-content">

          <p className="product-category">
            {product.category}
          </p>

          <h2>{product.name}</h2>

          <p className="product-model">
            Model: {product.model}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="specifications">

            <h3>Specifications</h3>

            <div className="spec-row">
              <span>Material</span>
              <strong>Construction Grade</strong>
            </div>

            <div className="spec-row">
              <span>Application</span>
              <strong>Construction</strong>
            </div>

            <div className="spec-row">
              <span>Availability</span>
              <strong>On Request</strong>
            </div>

          </div>

          <button className="details-quote-btn">
            Request a Quote
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails