import './App.css'

function App() {

  
function changeBg (){
	let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B", "C", "D", "E", "F"];

	for (let i = 1; i <= 6; i++) {
		let color = "#";
		for (let j = 1; j <= 6; j++) {
			color += colors[Math.floor(Math.random() * colors.length)];
		}
		document.body.style.backgroundColor = color 
	}
	// document.body.style.backgroundColor = color , WHY THIS IS INVALID
}

  return (
    <>
    <h1 onClick={changeBg}>BgCHanger</h1>
    </>
  )
}

export default App
