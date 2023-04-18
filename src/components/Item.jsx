import React from 'react'

const Item = ({d}) => {
  return (
    <div>name={d.name}
    {" , "}
   id= {d.id}</div>
  )
}

export default Item