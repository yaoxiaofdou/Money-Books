import React, { PropTypes } from 'react';
import './LoadJSON.css';

class LoadJSON extends React.Component {

  static propTypes = {
    handleLoad: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.textarea.addEventListener('paste', this.handlePaste);
  }

  handlePaste = (e) => {
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
    try {
      // Get pasted data via clipboard API
      const clipboardData = e.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData('text/plain');
      const raw = JSON.parse(pastedData);
      this.props.handleLoad(raw);
    } catch (ex) {
      e.target.value = 'something went wrong'; // eslint-disable-line no-param-reassign
    }
  }

  render() {
    return <textarea className="LoadJSON" ref={(c) => { this.textarea = c; }} placeholder="Paste raw here" />;
  }
}

export default LoadJSON;