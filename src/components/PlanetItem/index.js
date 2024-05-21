// Write your code here

const PlanetItem = props => {
  const {data} = props
  const {imageUrl, name, description} = data

  return (
    <div>
      <h1>PLANETS</h1>
      <img src={imageUrl} alt={`planet${name}` />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
