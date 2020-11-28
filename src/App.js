import {useEffect} from 'react';
import Routes from './Routes'
import {withRouter} from 'react-router-dom'
import './STYLES/style.css'
import {connect} from 'react-redux'
import NavBar from './Components/NavBar'

function App(props) {
  useEffect(() => {
    fetch('https://da-basement-games-api.herokuapp.com/sets')
    .then(res => res.json())
    .then(cardItems => {
        let sets = []
         cardItems.forEach(card => {
              sets.push(card.group_name)
          })
        props.setGroupNames(sets.sort((a,b) => a > b ? 1 : -1))
     })
  }, [])

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
    setGroupNames: (name) => {
      dispatch({
        type: "SET_GROUP_NAMES", payload: name
      })
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
