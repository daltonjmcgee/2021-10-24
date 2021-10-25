/**
 * @author Dalton McGee
 * @email dalton@dltmc.com
 * @title editor.js
 * @description
 */

import styles from '../../styles/Editor.module.scss'

export default function Editor() {
  return (
    <section className={`block ${styles.editor} ${styles.style_1}`}>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <h1>Editor</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
