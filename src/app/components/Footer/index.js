import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

const Footer = function() {
  return (
    <footer styleName="footer">
        a <a href="https://smahr.net" target="_blank">smahr.net</a> project
        <div styleName="separator">/</div>
        <a href="https://github.com/essmahr/entities">Github</a>
    </footer>
  );
}

export default CSSModules(Footer, styles);
