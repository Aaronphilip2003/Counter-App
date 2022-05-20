import React from 'react';
import './App.css';

function App() {

	const [count,setCount]=React.useState(0)

	function add(){
		setCount(count+1)
	}

		function subtract(){
		setCount(count-1)
	}
	
  return (
		<div className="counter">
			<button className="counter--minus" onClick={subtract}>-</button>
			<div className="counter--count">
				{count}
			</div>
			<button className="counter--plus" onClick={add}>+</button>
		</div>
  );
}

export default App;