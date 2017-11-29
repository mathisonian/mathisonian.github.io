import React from 'react';
const Format = require('d3-format');

class Display extends React.PureComponent {
  constructor(props) {
    super(props);
    this.format = Format.format(props.format || 'd');
  }

  formatValue(v) {
    const t = typeof v;
    return this.format(v);
    // switch(t) {
    //   case 'object':
    //     return JSON.stringify(v);
    //   case 'number':
    //   case 'string':
    //   default:
    //     return v;
    // }
  }

  render() {
    const { value } = this.props;
    const v = value !== undefined ? value : this.props.var;
    return (
      <span>
        {this.formatValue(v)}
      </span>
    );
  }
}

export default Display;
