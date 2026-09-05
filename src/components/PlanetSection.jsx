// planet Explorer - updated version
import PlanetCard from './PlanetCard'
import Planets from './Planets'

function PlanetSection() {
  return (
    <section id="planets" className="planet-section">
      <div className="section-heading">
        <p>OUR SOLAR SYSTEM</p>
        <h2>Explore the Planets</h2>
        <span>
          Discover fascinating information about the worlds around our Sun.
        </span>
      </div>

      <div className="planet-grid">
        {Planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </section>
  )
}

export default PlanetSection