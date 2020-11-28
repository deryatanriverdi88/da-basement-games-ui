import {withRouter } from "react-router-dom"

function SetCards({setCard, card}) {
    return (
        <>
            <p onClick={()=>{setCard(card)}}>{card.name}</p>
        </>
    )
}

export default withRouter(SetCards)