/**
 * @author Dalton McGee
 * @email dalton@dltmc.com
 * @title editor.js
 * @description
 */

import styles from '../../styles/blocks/Editor.module.scss'
import BlockBuilder from '../partials/_blockBuilder';
const { editor, wrapper, row, col, style_1 } = styles;

export default function Editor() {
  return (
    <section className={`block ${editor} ${style_1}`}>
      <div className={wrapper}>
        <div className={row}>
          <div className={col}>
            <BlockBuilder />
          </div>
        </div>
      </div>
    </section>
  )
}
