import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import { Spinner } from './components/Spinner';



function App() {
  
  return (

    
    <>
    <Navbar/>
    hello

      {/* <Person name={' Akanksha '}  address={' jiwaji ganj '} city={' Gwalior '}/> */}

{/* <Person name=" Akanksha "/>
<Person name=" yash "/>
<Person name=" Ansh "/>
<Person city='gwalior'/> */}

{/* <Person name=" Ansh " city="pune"/>
<Person name=" vijay " city="Indore"/> */}

<Person/>

<Counter/>
<Spinner/>
    </>
  );
}

export default App;

// export const name=(props)=>{
//   return(
// <>
//     {props.fname} {props.age}
// </>
//   )
// }
