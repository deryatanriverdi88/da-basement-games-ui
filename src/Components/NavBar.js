import { useState } from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

function NavBar(props) {
    const handleClick = () => {
        props.clearGroupsCards()
        props.clearActiveCard()
    }
    return (
        <>
            <nav id="nav-bar">
                <div className="link-div">
                    <Link className="link" to="/sets" onClick={handleClick}>Sets</Link>
                </div>
            </nav>
        </>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      clearGroupsCards: () => {
        dispatch({
            type: "CLEAR_GROUPS_CARDS"
        })
      },
      clearActiveCard: () => {
          dispatch({
              type: "CLEAR_ACTIVE_CARD"
          })
      }
    }
  }

  export default withRouter(connect(null, mapDispatchToProps)(NavBar));