import {useEffect} from 'react';
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

  return (
    <div className="App">
       <div id="header">
          <h1 className="header-name"> Da Basement Games</h1>
        </div>
      <NavBar/>
      <Routes/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setMagicCards: (cardObject) => {
      dispatch({
        type: 'SET_MAGIC_CARDS', payload: cardObject
      })
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
