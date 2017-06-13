import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

import CopyButton from '../CopyButton';

const EntityListItem = function(props) {
  const { name, html, css, onButtonClick } = props;

  const styleName = props.space
    ? `entity-space-${props.space}`
    : 'entity-symbol';

  return (
    <li styleName="entity-list-item-outer">
      <div styleName="entity-list-item-inner">
        <div styleName="entity-name">{name}</div>
        <div styleName={styleName}><span dangerouslySetInnerHTML={{__html: html}}></span></div>
        <CopyButton onClick={props.onButtonClick} type="css" content={css} styles={styles} />
        <CopyButton onClick={props.onButtonClick} type="html" content={html} styles={styles} />
      </div>
    </li>
  );
}

export default CSSModules(EntityListItem, styles);
