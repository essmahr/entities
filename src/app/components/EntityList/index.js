import React from 'react';
import CSSModules from 'react-css-modules';
import EntityListItem from '../EntityListItem';
import styles from './style.scss';

const Empty = function(props) {
  return (
    <div className={props.styles.empty}>No Matches</div>
  );
}

const EntityList = function(props) {
  const entities = props.entities.map((entity, idx) => {
    return <EntityListItem key={`${entity.html}-${idx}`} {...entity} onButtonClick={props.onButtonClick} />
  });

  return (
    <div styleName="entities-container-outer">
      {
        entities.length > 0
          ? <ul styleName="entities-container">{entities}</ul>
          : <Empty styles={props.styles} />
      }
    </div>
  );
}

export default CSSModules(EntityList, styles);
