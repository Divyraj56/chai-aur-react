import { useState } from 'react';
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

//  let counter =5;
 const addValue = ()=>{
  console.log("value added",Math.random());

  counter <=19 ? setCounter(counter +1) : setCounter(counter)
 }

 const removeValue = ()=>{
  counter >=1 ? setCounter(counter - 1) : setCounter(counter);

 }

  return (
		<>
			<h1>chai or dk</h1>
			<h2>counter value :{counter}</h2>

			<button onClick={addValue}>Add value {counter}</button>
			<br />
			<button onClick={removeValue}>remove value  {counter}</button>
			<footer> {counter}</footer>
		</>
	);
}

export default App
