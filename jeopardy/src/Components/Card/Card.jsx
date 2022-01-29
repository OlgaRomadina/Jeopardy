import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ object }) {

  const navigation = useNavigate()
  const status = object.isCorrect ? "correct" : "not-correct"
  return (
    <>
    { object.isCorrect === null ? 
      <div className='link' onClick={()=> navigation(`/question/${object.id}`)}>
        {object.score}
      </div>
      : <div className={status}>{object.score}</div>}
    </>
    
  );
}

export default Card;
