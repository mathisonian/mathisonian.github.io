import React from 'react';

class Center extends React.PureComponent {

  render() {
    return (
      <div style={Object.assign({margin: '0 auto', textAlign: 'center'}, this.props.style)}>
        {this.props.children}
      </div>
    );
  }
}


export default Center;
