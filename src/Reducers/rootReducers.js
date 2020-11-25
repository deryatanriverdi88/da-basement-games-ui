import { combineReducers } from 'redux'
import magicCards from './magicCardsReducer'

export default combineReducers({
    magicCards: magicCards
})