import React, { useRef } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Question(props) {
  // const { id } = useParams();
  // const currentQuestion = useSelector(state => state.questions).filter(el => el.id === +id);
  const dispatch = useDispatch()
  const currentQuestion = { 
    question: 'QUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTIONQUESTION', 
    answer: 'ANSWERANSWERANSWER',
    point: 300,
    status: 'new'
  }
  const answerRef = useRef();
  const inputHandler = () => {
    const answer = answerRef.current.value;
    dispatch(addAnswer(answer))
  }


  return (
    <div class="container">
      <div class="row">
        <div class="input-field col s10">
          <div>{currentQuestion.question}</div>
          <input id="answer" type="text" ref="answerRef" class="validate"/>
          <label class="active" for="answer">Ответ</label>
          <button class="waves-effect waves-light btn" onClick={inputHandler}>"Это окончательный ответ"</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
