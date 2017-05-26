import React from 'react';
import CSSModules from 'react-css-modules';
import EntityListItem from '../EntityListItem';
import styles from './style.scss';

const EntityList = function(props) {
  const entities = props.entities.map((entity, idx) => {
    return <EntityListItem key={`${entity.html}-${idx}`} {...entity} onButtonClick={props.onButtonClick} />
  });

  return (
    <div styleName="entities-container-outer">
      <ul styleName="entities-container">
        {entities}
      </ul>
    </div>
  );
}

export default CSSModules(EntityList, styles);
