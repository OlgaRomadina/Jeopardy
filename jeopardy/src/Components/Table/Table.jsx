import React from 'react';
import { useSelector } from 'react-redux';
// import Row from '../Row/Row.jsx';
import Card from '../Card/Card';
import './Table.css'


function Table(props) {

  const themes = useSelector((state) => state.cards)

  const japan = themes.cards.filter(obj => obj.topic === "Япония")
  const literature = themes.cards.filter(obj => obj.topic === "Литература")
  const sailing = themes.cards.filter(obj => obj.topic === "Мореплавание")

  return (
    <div>
      <h1>СВОЯ ИГРА</h1>
      <div >
        <table>
          <tbody>
            <tr>
              <td>
                {japan[0].topic}
              </td>
              {japan.map((el) => <td><Card object={el} key={el.id} /></td>)}
            </tr>
            <tr>
              <td>
                {literature[0].topic}
              </td>
              {literature.map((el) => <td><Card object={el} key={el.id} /></td>)}
            </tr>
            <tr>
              <td>
                {sailing[0].topic}
              </td>
              {sailing.map((el) => <td><Card object={el} key={el.id} /></td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
