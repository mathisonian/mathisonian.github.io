import React from 'react';
import TWEEN from 'tween.js';
import raf from 'raf';

const stages = {
  INITIAL: 0,
  ANIMATING: 1,
  FINAL: 2
}

class Easer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._initialValue = this.value;
    this.state = {
      stage: stages.INITIAL
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.stage !== stages.INITIAL) {
      return;
    }
    this.setState({stage: stages.ANIMATING});
    let _tween = { value : +this.props.value };
    new TWEEN.Tween(_tween)
      .to({value: this.props.targetValue}, 3000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        this.props.updateProps({ value: _tween.value });
      }).onStop(() => {
        this.setState({stage: stages.INITIAL });
      }).start();

    const animate = () => {
      const update = TWEEN.update();
      if (update) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}


export default Easer;
