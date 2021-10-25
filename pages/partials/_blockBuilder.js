/**
 * @author Dalton McGee
 * @email dalton@dltmc.com
 * @title _blockBuilder.js
 * @description This is a template file. Style import and function name should be
 * replaced with the name of the component.
 */

import styles from '../../styles/partials/BlockBuilder.module.scss';
import tempAPI from '../api/data';
import { blockGenerator } from '../../inc/helpers';
import { useState } from 'react';
const { block_builder, row, col } = styles;

export default function BlockBuilder() {
  const blockTypes = [
    "header1",
    "header2",
    "list",
    "image",
    "body",
  ];
  const [state, setState] = useState([]);
  const [inputState, setInputState] = useState("");

  function handleChange(e) {
    const value = e.target.value
    let newState = [...state];
    setInputState(value);
    blockTypes.map(el => {
      if (el == value) {
        newState.push(blockGenerator(value, state.length-1));
        setInputState("");
      }
    })
    setState([...newState]);
  }
  return (
    <div className={`${block_builder ? block_builder : "block_builder"} ${row}`}>
      {state.map((el)=>el.getHtml())}
      <input placeholder="Add new block..." value={inputState} list="blockList" onChange={handleChange} />
      <datalist className={col} id="blockList">
        {blockTypes.map((el, i) => {
          return (<option value={el} key={i} />)
        })}
      </datalist>
    </div>
  )
}
