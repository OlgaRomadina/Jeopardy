export function correctAnswerAC (payload) {
  return {
    type: 'ADD_SCORE',
    payload,
  }
}

export function notCorrectAnswerAC (payload) {
  return {
    type: 'NOT_CORRECT',
    payload,
  }
}
