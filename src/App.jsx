import React from 'react'
import { useState } from 'react'
import Item from './components/Item'


export default function App() {
    const [data, setData] = useState([
        {name: "yash" ,id:1},
        {name: "Ansh" ,id:2},
        {name: "Abhishek" ,id:3},
        {name: "Ashish", id:4},
        {name: "Muskan", id:5},


    ])
    
  return (<>
    <div className="container">
        {data.map((e)=><Item d={e} />)}
        {/* {data.map((Item)=>console.log(Item))} */}

    </div>
    </>
  )
}
