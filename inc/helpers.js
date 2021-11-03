import styles from '../styles/partials/BlockBuilder.module.scss';
import { GetStaticProps } from 'next';

/**
 *
 * @param {string} type
 * @param {number} index
 * @returns {JSX.Element}
 */
export function blockGenerator(inputState, index) {
  let ret;
  const type = inputState.type;
  switch (inputState.type) {
    case "header1":
      ret = {
        type,
        getHtml: ()=>{
          return (<h1 className={styles.header1} key={index}>{inputState.value}</h1>)
        },
      };
      break;
    case "header2":
      ret = {
        type,
        getHtml: ()=>{
          return (<h2 className={styles.header2} key={index}>{inputState.value}</h2>)
        },
      };
      break;
    case "body":
      ret = {
        type,
        getHtml: ()=>{
          return (<p className={styles.body} key={index}>{inputState.value}</p>)
        },
      };
      break;
    case "image":
      ret = {
        type,
        getHtml: ()=>{
          return (<img className={styles.body} key={index} src={inputState.value}/>)
        },
      };
      break;
  }
  return ret;
}
