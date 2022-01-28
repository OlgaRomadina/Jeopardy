import React, { useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { 
//   useSelector, 
// useDispatch } from 'react-redux';
// import { addAnswer } from '../redux/Reducers/AC/addAnswerAC.js'

function Question(props) {
  //   const { id } = useParams();
  //   const currentQuestion = useSelector(state => state.questions).filter(el => el.id === +id);
  // const dispatch = useDispatch()
  const currentQuestion = {
    question: 'QUESTIONQUES TIONQUESTIONQUESTIONQUESTI ONQUESTIONQUESTIONQUESTIONQU ESTIONQUESTIONQU ESTIONQUEST IONQUESTIONQUESTI ONQUESTIONQUESTIONQUES TIONQUES TIONQUESTION',
    answer: 'ANSWERANSWERANSWER',
    point: 300,
    status: 'new'
  }
  const answerRef = useRef();
  const inputHandler = () => {
    const answer = answerRef.current.value;
    console.log(answer);
    // dispatch(addAnswer(answer))
  }


  return (
    <div class="container">
      <div class="row" style={{ marginTop: '50px' }}>
        <div class="s10">{currentQuestion.question}</div>

        <div class="input-field col s10" style={{ margin: '20px' }}>
          <input id="answer" type="text" ref={answerRef} class="validate" />
          <label class="active" htmlFor="answer">Ответ</label>
          <button class="waves-effect waves-light btn" onClick={inputHandler}>"Это окончательный ответ"</button>
        </div>
      </div>
    </div >
  );
}

export default Question;
