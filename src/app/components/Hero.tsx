import React from 'react'

type propType = {
  name:string
  genre:string
  info:string[]
}
const Hero = (props:propType) => {
  const {name, genre, info} = props
  return (    
    <div>
      <div>{name}  {genre}</div>
      <h2>{info[0]}. The future is {info[1]}</h2>
    </div>
  )
}
export default Hero