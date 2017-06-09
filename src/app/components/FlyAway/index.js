import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

class FlyAway extends Component {
  constructor(props) {
    super(props);

    this.animationDuration = 1500;
    this.state = {
      flyouts: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState) => {
      const flyouts = [...prevState.flyouts, nextProps.currentCopy];
      return { flyouts };
    }, () => {
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            flyouts: prevState.flyouts.slice(1, prevState.flyouts.length)
          };
        });
      }, this.animationDuration);
    });
  }

  render() {
    const flyouts = this.state.flyouts.map((flyout, idx) => {
      const style = {
        left: flyout.coords.x,
        top: flyout.coords.y,
      };

      return (
        <div key={flyout.stamp} style={style} styleName="flyaway">
          copied
        </div>
      );
    });

    return (
      <div>{flyouts}</div>
    );
  }
}

export default CSSModules(FlyAway, styles);
