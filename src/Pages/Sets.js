import {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {withRouter, useLocation} from 'react-router-dom'
import ActiveCard from '../Components/ActiveCard'
import Select from 'react-select';

function Sets(props) {
    const location = useLocation()
    const [setName, setSetName] = useState("")
    const [cardInState, setCardInState] = useState({})
    let cards = []
    if(props.groupsCards.length > 0){
        cards =
        props.groupsCards.map(card =>{
            return{
                value: card,
                label: card.name
            }
        })
    }

    let setNames = []
    if(props.groupNames){
        setNames =
        props.groupNames.map(set =>{
            return{
                value: set,
                label: set
            }
        })
    }
    useEffect(() => {
        if(!setCardInState.value){
            setCardInState({value:{},label:"Select a card..." })
        }
        if(location.state){
            if(location.state.setCards && location.state.setCards.length > 0){
                props.setGroupsCards(location.state.setCards)
                props.clearActiveCard()
                setSetName(location.state.setCards[0].group_name)
            }else if (location.state.card && location.state.card.id){
                props.setActiveCard(location.state.card)
                props.setGroupsCards(location.state.set)
                setSetName(location.state.card.group_name)
                setCardInState({value:location.state.card ,label:location.state.card.name })
            }
        }else if(!location.state){
            let path = location.pathname.split('/')
            path.shift()
            console.log(path[1])
            if(path.length === 1) {
                props.clearActiveCard()
                props.clearGroupsCards()
            }else if(path.length === 2){
                fetch(`https://da-basement-games-api.herokuapp.com/cards?setName=${path[1]}`)
                .then(res=>res.json())
                .then(cards => {
                    props.setGroupsCards(cards)
                    props.clearActiveCard()
                    setSetName(path[1])
                })
            }else if(path.length === 3){
                fetch(`https://da-basement-games-api.herokuapp.com/cards?setName=${path[1]}`)
                .then(res=>res.json())
                .then(cards => {
                    props.setGroupsCards(cards)
                    setSetName(path[1])
                    props.setActiveCard(cards.find(card => card.name === path[2]))
                })
            }
        }
    }, [location.pathname])

    const setCard = (card) => {
        setCardInState(card)
        let cardItem = card.value
        props.setActiveCard(cardItem)
        props.history.push({pathname: `/sets/${cardItem.group_name}/${cardItem.name}`, state: {card: cardItem, set:props.groupsCards}})
    }

    const handleSetClick = async(set)=>{
        let setName = set.value
        setSetName(setName)
        await fetch(`https://da-basement-games-api.herokuapp.com/cards?setName=${setName}`)
        .then(res => res.json())
        .then(cards => {
            props.setGroupsCards(cards)
            props.history.push({pathname: `/sets/${setName}`, state: {setCards: cards}})
        })
    }

    return (
        <>
        <div className="set-and-card-container">
            {
                props.groupsCards && props.groupsCards.length > 0 ?
                <>
                <h2 className="set-name">Set Name : {setName}</h2>
                <Select
                    className="cards"
                    autoFocus
                    placeholder="Select a card..."
                    value={cardInState}
                    onChange={setCard}
                    options={cards}
                />
                </>
                :
                <Select
                    className="sets"
                    autoFocus
                    placeholder="Select a set.."
                    value={setName}
                    onChange={handleSetClick}
                    options={setNames}
                />
            }
            <ActiveCard card={props.activeCard}/>
        </div>
    </>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      setGroupsCards: (cardObject) => {
        dispatch({
           type: 'SET_GROUPS_CARDS', payload: cardObject
        })
      },
      clearGroupsCards: () => {
        dispatch({
           type: "CLEAR_GROUPS_CARDS"
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
        groupsCards: state.magicCards.groupsCards,
        groupNames: state.magicCards.groupNames,
        activeCard: state.magicCards.activeCard
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sets))
