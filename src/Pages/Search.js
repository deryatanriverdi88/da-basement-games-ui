import {useEffect, useState} from 'react'
import Select from 'react-select';
import { connect } from 'react-redux';
import ActiveCard from '../Components/ActiveCard'
import {withRouter, useLocation} from 'react-router-dom'

function Search(props) {
    const [cardInState, setCardInState] = useState("")
    const location = useLocation()
    useEffect(() => {
        if(!setCardInState.value){
            setCardInState("")
        }
        if(location.state){
            if (location.state.card && location.state.card.id){
                props.setActiveCard(location.state.card)
                setCardInState(location.state.card)
                setCardInState("")
            }
        }else if(!location.state){
            let path = location.pathname.split('/')
            path.shift()
            if(path.length === 1) {
                props.clearActiveCard()
                setCardInState("")
            }else if(path.length === 2){
                fetch(`https://da-basement-games-api.herokuapp.com/favorite_cards/${path[1]}`)
                .then(res=>res.json())
                .then(card => {
                    props.setActiveCard(card)
                    setCardInState("")
                })
            }
        }
    }, [location.pathname])

    const setCard = (card) => {
        setCardInState(card)
        props.setActiveCard(card)
        props.history.push({pathname: `/search/${card.id}`, state: {card: card}})
        setTimeout(() => {
            setCardInState("")
        }, 1000)
    }

    const customFilter = (option, searchText) =>{
        if (
          option.data.name.toLowerCase().startsWith(searchText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      }

    return (
        <div className="set-card-search-container">
            <Select
                    className="cards"
                    autoFocus
                    placeholder="Search a card..."
                    onChange={setCard}
                    value={cardInState}
                    options={props.magicCards}
                    getOptionValue={option => `${option.name}`}
                    getOptionLabel={option => `${option.name} / ${option.group_name}`}
                    isOptionSelected={option => {
                       return cardInState.id === option.id ? true : false;
                    }}
                    filterOption={customFilter}
                    autoFocus={true}
                    isSearchable={true}
            />
            <p className="cards-are-loading">
                {
                    props.magicCards.length > 0 ?
                    `There are ${props.magicCards.length} of cards in database`
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