
import { data as cards } from '../../data'

const initialState = { cards }

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

            } return { ...topic, isCorrect: false }
          }
          return topic
        })
      }

    default:
      return state
  }
}
