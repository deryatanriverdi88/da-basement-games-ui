import { useState } from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

function NavBar(props) {

    return (
        <>
            <nav id="nav-bar">
                <div className="link-div">
                    <Link className="link" to="/magic-cards">magic Cards</Link>
                </div>
            </nav>
        </>
    )
}


export default withRouter(NavBar)