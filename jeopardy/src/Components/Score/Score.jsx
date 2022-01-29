import React from 'react';
import { useSelector } from 'react-redux';


export default function Score(props) {

  const score = useSelector((state) => state.cards.score)

  return (
    <div>
     <h3>Ваш  счет {score} очков</h3>
    </div>
  );
}


