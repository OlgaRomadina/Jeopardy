
import { data as cards } from '../../data'

const initialState = { cards, score: 0 }

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOPIC':
      return {
        ...state, topics: state.topics.map((topic) => {
          if (topic.id === action.payload.question.id) {
            if (topic.answer === action.payload.answer) {
              return {
                ...topic,
                isCorrect: true
              }

            } return { ...topic, isCorrect: null }
          }
          return topic
        })
      }
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
