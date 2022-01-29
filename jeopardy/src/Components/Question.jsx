import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { correctAnswerAC, notCorrectAnswerAC } from '../redux/Reducers/AC/AC.js'

function Question(props) {
  const { id } = useParams();
  const currentQuestion = useSelector(state => state.cards.cards).find(el => el.id === +id);
  const navigation = useNavigate()
  useEffect(() => {
    console.log(currentQuestion.question);
  })
  const dispatch = useDispatch()
  const answerRef = useRef();
  const inputHandler = () => {
    const answer = answerRef.current.value;
    
    if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      dispatch(correctAnswerAC({score: currentQuestion.score, id: currentQuestion.id }));
      return navigation(`/`);
    } dispatch(notCorrectAnswerAC({score: currentQuestion.score, id: currentQuestion.id }));
    return navigation(`/`);
  }


  return (
    <div className="container">
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="s10">{currentQuestion.question}</div>

        <div className="input-field col s10" style={{ margin: '20px' }}>
          <input id="answer" type="text" ref={answerRef} className="validate" />
          <label className="active" htmlFor="answer">Ответ</label>
          <button className="waves-effect waves-light btn" onClick={inputHandler}>"Это окончательный ответ"</button>
        </div>
      </div>
    </div >
  );
}

export default Question;
