import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="app-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container">
        <Slider>
          {planetsList.map(planetItem => (
            <PlanetItem key={planetItem.id} planetItem={planetItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
