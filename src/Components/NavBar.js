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


export default withRouter(NavBar)