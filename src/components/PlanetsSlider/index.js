// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    sliderToShow: 1,
    sliderToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.name} data={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
