import React from 'react'

const Item = ({d}) => {
  
  
  return (
    <div className='Itemname my-4'>name={d.name}
    {" , "}
   id= {d.id}
   {"  "}
   <button className='delete bg-danger mx-4'>Delete</button>
   
   </div>
  )
}

export default Item