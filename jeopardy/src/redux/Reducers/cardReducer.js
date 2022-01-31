
import { data as cards } from '../../data'

const initialState = { cards, score: 0 }

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_SCORE':
        console.log()
        return {
          ...state, 
          score: (state.score + action.payload.score),
          cards: state.cards.map( (card) => {
            if (card.id == action.payload.id) {
              return {...card, isCorrect: true } 
            } return card 
          })
        }
        case 'NOT_CORRECT':
        console.log()
        return {
          ...state, 
          score: (state.score - action.payload.score),
          cards: state.cards.map( (card) => {
            if (card.id == action.payload.id) {
              return {...card, isCorrect: false } 
            } return card 
          })
        }
    default:
      return state
  }
}
