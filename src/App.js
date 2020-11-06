import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Chronometer from './components/Chronometer'
import Clock from './components/Clock'

function App() {

  const [clock, setClock] = useState(false)

  const changeView = (view) => {
    setClock(view)
  }

  return (
    <div className="App">
      <NavBar change={changeView}  />
      {clock ? <Clock /> : <Chronometer />}
    </div>
  );
}

export default App;
