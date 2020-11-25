import React, {useEffect} from 'react';
import Routes from './Routes'
import {withRouter} from 'react-router-dom'
import './STYLES/style.css'
import {connect} from 'react-redux'
import NavBar from './Components/NavBar'

function App(props) {
  useEffect(() => {
    fetch('https://da-basement-games-api.herokuapp.com/favorite_cards')
    .then(res => res.json())
    .then(cardItems => {
      console.log(cardItems)
    })
  }, [props])

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
