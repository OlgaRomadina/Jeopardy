import React from 'react';
import { useSelector } from 'react-redux';
import Row from '../Row/Row.jsx';


function Table(props) {

  const themes = useSelector((state) => state.cards)

  const japan = themes.cards.filter(obj => obj.topic === "Япония")
  const literature = themes.cards.filter(obj => obj.topic === "Литература")
  const sailing = themes.cards.filter(obj => obj.topic === "Мореплавание")
  
  console.log(themes);
  console.log(japan[0].score);
  
  return (
    <div>
      <Row />
      <h1>1</h1>
      <h6>{japan[0].id}</h6>
    </div>
  );
}

export default Table;
