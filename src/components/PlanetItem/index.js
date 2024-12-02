import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {id, name, imageUrl, description} = planetItem
  return (
    <div className="planet-card-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
