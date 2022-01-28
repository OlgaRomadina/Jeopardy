import React from 'react';
import { useSelector } from 'react-redux';
// import Row from '../Row/Row.jsx';
import Card from '../Card/Card';
import Score from '../Score/Score';


function Table(props) {

  const themes = useSelector((state) => state.cards)

  const japan = themes.cards.filter(obj => obj.topic === "Япония")
  const literature = themes.cards.filter(obj => obj.topic === "Литература")
  const sailing = themes.cards.filter(obj => obj.topic === "Мореплавание")

  return (
    <div>
      <h1>JEOPARDY</h1>
      {japan.length && japan.map((el) => <Card object={el} key={el.id}/>)}
      {literature.length && literature.map((el) => <Card object={el} key={el.id}/>)}
      {sailing.length && sailing.map((el) => <Card object={el} key={el.id}/>)}
      <Score />
    </div>

  
  );
}

export default Table;
