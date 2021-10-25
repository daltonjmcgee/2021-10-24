/**
 * @author Dalton McGee
 * @email dalton@dltmc.com
 * @title _template.js
 * @description This is a template file. Style import and function name should be
 * replaced with the name of the component.
 */

import styles from '../../styles/Directory.module.scss'

export default function Directory() {
  return (
    <section className={`block ${styles.directory} ${styles.style_1}`}>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <h1>Directory</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
