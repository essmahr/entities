import React from 'react';

const EntityListItem = function(props) {
  const { name } = props;

  return (
    <li>
      {name}
    </li>
  );
}

const EntityList = function(props) {
  const entities = props.entities.map((entity, idx) => {
    return <EntityListItem key={entity.html} {...entity} />
  });

  return (
    <ul>
      {entities}
    </ul>
  );
}

export default EntityList;
