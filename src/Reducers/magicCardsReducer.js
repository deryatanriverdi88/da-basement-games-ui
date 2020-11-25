export default function magicCardsReducer(state=[], {type, payload}){
    switch (type) {
        case 'SET_MAGIC_CARDS':
            return payload
        case 'CLEAR_MAGIC_CARDS':
            return []
        default:
            return state
    }
}