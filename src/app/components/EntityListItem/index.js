import React from 'react';

const EntityListItem = function(props) {
  const { name, html, css } = props;

  return (
    <li className="entity-list-item-outer">
      <div className="entity-list-item-inner">
        <div className="entity-symbol" dangerouslySetInnerHTML={{__html: html}}></div>
        <div className="entity-name">{name}</div>
        <div className="entity-actions">
          <button className="copy-button">
            <div className="copy-button-label">HTML</div>
            <div className="copy-button-text">{html}</div>
          </button>
          <button className="copy-button">
            <div className="copy-button-label">CSS</div>
            <div className="copy-button-text">{css}</div>
          </button>
        </div>
      </div>
    </li>
  );
}

export default EntityListItem;
