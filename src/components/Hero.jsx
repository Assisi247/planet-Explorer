function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <div className="hero-planet">
          <img
            src="https://anurella.github.io/images/planets/earth.jpg"
            alt="Earth"
          />
        </div>

        <h1>EXPLORE OUR SOLAR SYSTEM THROUGH DATA</h1>

        <p className="hero-text">
          Understand the planets not just by name, but by measurable facts.
          From size and mass to gravity and density, this page breaks down
          the solar system in a clear, data-driven way.
        </p>

        <a href="#planets" className="primary-button">
          Explore the Data
        </a>

      </div>
    </section>
  )
}

export default Hero