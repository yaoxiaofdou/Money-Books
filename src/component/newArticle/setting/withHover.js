import React, { Component } from 'react';

const withHover = ComposedComponent => class extends Component {

  state = {
    isHovered: false,
  }

  handleEnter = () => this.setState({ isHovered: true })
  handleLeave = () => this.setState({ isHovered: false })

  render() {
    return (
      <ComposedComponent
        {...this.props}
        isHovered={this.state.isHovered}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      />
    );
  }
};

export default withHover;