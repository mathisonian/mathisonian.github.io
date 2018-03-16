import React from 'react';

class Link extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const href = this.props.href || this.props.url || undefined;
    return (
      <a {...this.props} href={href} >
        {this.props.text || this.props.children}
      </a>
    );
  }
}

export default Link;
