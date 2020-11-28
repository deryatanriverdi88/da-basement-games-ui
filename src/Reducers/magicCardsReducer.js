export default function magicCardsReducer(state={groupsCards: [], groupNames: [], activeCard: {}}, {type, payload}){
    switch (type) {
        case 'SET_GROUP_NAMES':
            return {...state, groupNames: payload}
        case 'SET_GROUPS_CARDS':
            return {...state, groupsCards: payload}
        case 'SET_ACTIVE_CARD':
            return {...state, activeCard: payload}
        case 'CLEAR_ACTIVE_CARD':
            return {...state, activeCard: {}}
        case 'CLEAR_GROUPS_CARDS':
            return {...state, groupsCards: []}
        default:
            return state
    }
}