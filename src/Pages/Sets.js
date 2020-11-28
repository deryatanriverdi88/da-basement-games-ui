import {useEffect} from 'react'
import { connect } from 'react-redux'
import {withRouter, useLocation} from 'react-router-dom'
import SetItem from '../Components/SetItem'
import SetCards from '../Components/SetCards'
import ActiveCard from '../Components/ActiveCard'

function Sets(props) {
    const location = useLocation()
    useEffect(() => {
        if(location.state){
            if(location.state.setCards && location.state.setCards.length > 0){
                props.setGroupsCards(location.state.setCards)
            }else if (location.state.card && location.state.card.id){
                props.setActiveCard(location.state.card)
                props.setGroupsCards(location.state.set)
            }
        }else if(!location.state){
            let path = location.pathname.split('/')
            path.shift()
            if(path.length === 2){
                fetch(`https://da-basement-games-api.herokuapp.com/cards?setName=${path[1]}`)
                .then(res=>res.json())
                .then(cards => {
                    props.setGroupsCards(cards)
                })
            }else if(path.length === 3){
                fetch(`https://da-basement-games-api.herokuapp.com/cards?setName=${path[1]}`)
                .then(res=>res.json())
                .then(cards => {
                    props.setGroupsCards(cards)
                    props.setActiveCard(cards.find(card => card.name === path[2]))
                })
            }
        }
    }, [])
    return (
        <div>
        </div>
    )
}

export default Sets
