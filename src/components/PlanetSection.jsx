import { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard'

function PlanetSection() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://example.com/api/planets')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch planet data')
        }

        return response.json()
      })
      .then((data) => {
        setPlanets(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Unable to load planet data.')
        setLoading(false)
      })
  }, [])

  return (
    <section id="planets" className="planet-section">
      <div className="section-heading">
        <p>OUR SOLAR SYSTEM</p>
        <h2>Explore the Planets</h2>
        <span>
          Discover fascinating information about the worlds around our Sun.
        </span>
      </div>

      {loading && <p className="status-message">Loading planets...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="planet-grid">
          {planets.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </section>
  )
}

export default PlanetSection