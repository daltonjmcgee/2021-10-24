/**
 * @author Dalton McGee
 * @email dalton@dltmc.com
 * @title _blockBuilder.js
 * @description This is a template file. Style import and function name should be
 * replaced with the name of the component.
 */

import styles from '../../styles/partials/BlockBuilder.module.scss';
import { blockGenerator, handleApi } from '../../inc/helpers';
import React, { useState } from 'react';
const { block_builder, row, col, style_1 } = styles;

export default function BlockBuilder() {
  const blockTypes = [
    "header1",
    "header2",
    "image",
    "body",
  ];
  const [state, setState] = useState([]);
  const [inputState, setInputState] = useState({ type: "", value: "" });
  const [_continue, _setContinue] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newState = [...state];
    newState.push(blockGenerator(inputState));
    setState(newState);
    setInputState({ type: "", value: "" });
    _setContinue(false);
  }

  function handleChange(e) {
    const value = e.target.value;
    let newState = { ...inputState };
    if (!_continue) {
      newState.type = value;
    } else {
      newState.value = value;
    }
    for (let str of blockTypes) {
      if (str === value) {
        _setContinue(true)
      }
    }
    setInputState(newState);
  }

  return (
    <React.Fragment>
    {state.map(el=>el.getHtml())}
    <form className={`
      ${block_builder ? block_builder : "block_builder"}
      ${row}
      ${_continue ? style_1 : ""}`}  onSubmit={handleSubmit}>
      {_continue ? <p>{inputState.type}</p> : false}
      <input placeholder="Choose block type..." value={!_continue ? inputState.type : inputState.value} list={!_continue ? "typeList" : ""} onChange={handleChange} />
      {!_continue ? (<datalist className={col} id="typeList">
        {blockTypes.map((el, i) => {
          return (<option value={el} key={i + "datalist"} />)
        })}
      </datalist>) : false}
    </form>
    </React.Fragment>
  )
}
