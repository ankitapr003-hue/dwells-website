function MaterialVisual() {

  const materials = [
    {
      title: "Stone & Surfaces",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Tiles & Finishes",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Construction Materials",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
    }
  ];

  return (
    <section className="material-visual">

      <div className="material-visual-heading">

        <span>EXPLORE MATERIALS</span>

        <h2>
          The materials
          <br />
          behind the vision.
        </h2>

      </div>


      <div className="material-visual-grid">

        {materials.map((item, index) => (

          <div
            className="material-visual-card"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`
            }}
          >

            <div className="material-card-overlay"></div>

            <div className="material-card-content">
              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <div className="material-arrow">
                →
              </div>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default MaterialVisual;