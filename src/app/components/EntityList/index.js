import React from 'react';
import EntityListItem from '../EntityListItem';

const EntityList = function(props) {
  const entities = props.entities.map((entity, idx) => {
    return <EntityListItem key={`${entity.html}-${idx}`} {...entity} />
  });

  return (
    <ul className="entities-container">
      {entities}
    </ul>
  );
}

export default EntityList;
