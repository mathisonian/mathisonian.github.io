import React from 'react';

class Center extends React.PureComponent {

  render() {
    return (
      <div style={{margin: '0 auto', textAlign: 'center'}}>
        {this.props.children}
      </div>
    );
  }
}


export default Center;
