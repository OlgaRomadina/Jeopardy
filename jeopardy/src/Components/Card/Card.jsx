import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ object }) {

  const navigation = useNavigate()
  return (
    <div onClick={()=> navigation(`/question/${object.id}`)}>
      {object.score}
    </div>
  );
}

export default Card;
