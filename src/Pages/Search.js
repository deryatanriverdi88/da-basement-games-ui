import {useEffect, useState} from 'react'
import Select from 'react-select';
import { connect } from 'react-redux';
import ActiveCard from '../Components/ActiveCard'
import {withRouter, useLocation} from 'react-router-dom'

function Search(props) {
    const [cardInState, setCardInState] = useState("")
    const location = useLocation()
    useEffect(() => {
        fetch("https://da-basement-games-api.herokuapp.com/favorite_cards")
        .then(res => res.json())
        .then(cards => {
          props.setMagicCards(cards)
        })
        if(!setCardInState.value){
            setCardInState({value:{},label:"Search a card..." })
        }
        console.log(location.state)
        if(location.state){
            if (location.state.card && location.state.card.id){
                props.setActiveCard(location.state.card)
                setCardInState({value:location.state.card ,label:location.state.card.name })
            }
        }else if(!location.state){
            let path = location.pathname.split('/')
            path.shift()
            console.log(path[1])
            if(path.length === 1) {
                props.clearActiveCard()
            }else if(path.length === 2){
                fetch(`https://da-basement-games-api.herokuapp.com/favorite_cards/${path[1]}`)
                .then(res=>res.json())
                .then(card => {
                    props.setActiveCard(card)
                })
            }
        }
    }, [location.pathname])

    const setCard = (card) => {
        setCardInState(card)
        let cardItem = card.value
        props.setActiveCard(cardItem)
        props.history.push({pathname: `/search/${cardItem.id}`, state: {card: cardItem}})
    }

    let cardsToSearch = []
    cardsToSearch = props.magicCards.map(card => {
        return{
            value: card,
            label: card.name
        }
    })
    return (
        <div className="set-card-search-container">
            <Select
                    className="cards"
                    autoFocus
                    placeholder="Search a card..."
                    value={cardInState}
                    onChange={setCard}
                    options={cardsToSearch}
            />
            <p className="cards-are-loading">
                {
                    cardsToSearch.length > 0 ?
                    `There are ${cardsToSearch.length} of cards in database`
                    :
                    "Cards are loading..."
                }
            </p>
            <ActiveCard card={props.activeCard}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      setMagicCards: (cards) =>{
        dispatch({
            type: "SET_MAGIC_CARDS", payload: cards
        })
      },
      setActiveCard: (card) => {
          dispatch({
            type: "SET_ACTIVE_CARD", payload: card
          })
      },
      clearActiveCard: () => {
        dispatch({
            type: "CLEAR_ACTIVE_CARD"
         })
      }
    }
}

const mapStateToProps = (state) => {
    return {
        magicCards: state.magicCards.magicCards,
        activeCard: state.magicCards.activeCard
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))