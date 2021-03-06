import * as React from 'react';
import Icon from '../Icon/';
import {handleMouseUpByBlurring} from '../../utilities/focus';
import * as styles from './Tag.scss';

export interface Props {
  children?: string,
  onRemove?(): void,
}

export default function Tag({children, onRemove}: Props) {
  return (
    <span className={styles.Tag}>
      <span>{children}</span>
      <button
        type="button"
        aria-label="Remove"
        className={styles.Button}
        onClick={onRemove}
        onMouseUp={handleMouseUpByBlurring}
      >
        <Icon source="cancelSmall" />
      </button>
    </span>
  );
}
