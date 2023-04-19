import React from 'react'
import { useState } from 'react'
import Item from './components/Item'


export default function App() {
  
    // const [data, setData] = useState([
    //     {name: "yash" ,id:1},
    //     {name: "Ansh" ,id:2},
    //     {name: "Abhishek" ,id:3},
    //     {name: "Ashish", id:4},
    //     {name: "Muskan", id:5},


    // ])

    //create object:-
    const state=[{name: "yash" ,id:1},
        {name: "Ansh" ,id:2},
        {name: "Abhishek" ,id:3},
        {name: "Ashish", id:4},
        {name: "Muskan", id:5},]

        const [data, setData] = useState(state)
    const addItem=(name,id)=>{
      // alert("Hello");
      const Item={
        name: name,
        id: id,
      }
      setData([...data,Item])
    }

    const deleteItem=(id)=>{
      // const del=data.filter((e)=>e.id===id)
      const del=data.filter((e)=>e.id!==id)
      setData(del)
    }

  return (<>
  
    <div className="container text-center bg-info text-danger">
        {data.map((e)=><Item d={e} />)}
        {/* {data.map((Item)=>console.log(Item))} */}
{/* <button className='btn.btn bg-success' onClick={()=>addItem("Anamika",6)}> submit</button> */}
<button className='btn.btn bg-success' onClick={(e)=>deleteItem(3)}> submit</button>
    </div>
    </>
  )
}
