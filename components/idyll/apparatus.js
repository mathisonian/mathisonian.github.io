import React from 'react';
import load from 'little-loader'
import { exception } from 'react-ga';

let scriptLoaded = false;
let _aid = 0;

class Apparatus extends React.Component {

  constructor(props) {
    super(props);

    this.id = _aid;
    _aid++;

    this.state = {
      scriptLoaded: scriptLoaded,
      viewer: null
    }

    this.handleViewerRender = this.handleViewerRender.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.viewer) {
      return;
    }
    Object.keys(this.props).filter((d) => {
      return d.indexOf('_') !== 0;
    }).filter((d) => {
      return ['error', 'children'].indexOf(d) === -1;
    }).forEach((d) => {
      const currentValue = this.props[d];
      const newValue = nextProps[d];
      if (currentValue !== newValue) {
        const attribute = this.state.viewer.getAttributeByLabel(d);
        attribute.setExpression(newValue);
      }
    });
  }

  handleViewerRender() {
    Object.keys(this.props).filter((d) => {
      return d.indexOf('_') !== 0;
    }).filter((d) => {
      return ['error', 'children'].indexOf(d) === -1;
    }).forEach((d) => {
      const currentValue = this.props[d];
      try {
        const attribute = this.state.viewer.getAttributeByLabel(d);
        const apparatusValue = attribute.value();
        if (currentValue !== apparatusValue) {
          this.props.updateProps({
            [d]: apparatusValue
          })
        }
      } catch(e) {

      }
    })
  }

  initializeViewer() {
    if (this.state.viewer) {
      return;
    }
    console.log('initializing viewer')
    console.log({
      url: this.props._url,
      selector: `#idyll-apparatus-viewer-${this.id}`,
      regionOfInterest: this.props._regionOfInterest,
      onRender: this.handleViewerRender
    })
    this.setState({
      viewer: new ApparatusViewer({
        url: this.props._url,
        selector: `#idyll-apparatus-viewer-${this.id}`,
        regionOfInterest: this.props._regionOfInterest,
        onRender: this.handleViewerRender
      })
    });
  }

  componentDidMount() {
    if (!scriptLoaded) {
      load("https://rawgit.com/cdglabs/apparatus-site/gh-pages/editor/dist/apparatus-viewer.js", (err) => {
        console.log('script loaded')
        if (!err) {
          console.log('no error')
          scriptLoaded = true;
          this.setState({ scriptLoaded: true });
          this.initializeViewer();
        }
      });
    } else {
      this.initializeViewer();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, _width, _height, style } = this.props;
    return (
      <div id={`idyll-apparatus-viewer-${this.id}`} className={className} style={Object.assign({ margin: '30px auto', width: _width ? _width: '100%', height: _height ? _height : 'auto'}, style)} />
    );
  }
}

module.exports = Apparatus;