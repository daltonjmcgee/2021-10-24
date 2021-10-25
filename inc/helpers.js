import styles from '../styles/partials/BlockBuilder.module.scss';

export function blockGenerator(type, index) {
  let ret;
  switch (type) {
    case "header1":
      ret = {
        type,
        getHtml: ()=>{
          return (<h1 className={styles.header1} key={index}>Header 1</h1>)
        },
      };
      break;
    case "header2":
      ret = {
        type,
        getHtml: ()=>{
          return (<h2 className={styles.header2} key={index}>Header 2</h2>)
        },
      };
      break;
    case "body":
      ret = {
        type,
        getHtml: ()=>{
          return (<p className={styles.body} key={index}>This is a body</p>)
        },
      };
      break;
  }
  return ret;
}
