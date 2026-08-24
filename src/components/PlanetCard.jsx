function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      <img
        src={planet.image}
        alt={planet.name}
        className="planet-image"
      />

      <figcaption>
        <h3>{planet.name}</h3>

        <p>
          <strong>Distance from the Sun:</strong>{' '}
          {planet.distance}
        </p>
      </figcaption>
    </figure>
  )
}

export default PlanetCard