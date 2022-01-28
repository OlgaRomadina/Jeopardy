import React from 'react';
import { useSelector } from 'react-redux';


export default function Score(props) {

  const score = useSelector((state) => state.score)

  return (
    <div>
     <h3>{score}</h3>
    </div>
  );
}


