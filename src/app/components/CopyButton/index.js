import React, { Component } from 'react';

class CopyButton extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(evt) {
    evt.preventDefault();
    this.props.onClick(this.props.content, this.el);
  }

  render() {
    const { content, type, styles, onClick } = this.props;

    return (
      <button onClick={this.onButtonClick} className={styles[`copy-button-${type}`]}>
        <div className={styles['copy-button-text']} ref={(el) => this.el = el}>{content}</div>
      </button>
    );
  }
}

export default CopyButton;
