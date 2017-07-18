import React, { PropTypes } from 'react';
import withHover from '../withHover';

import './Video.css';

const imgStyles = {
  medium: {
    height: 300,
  },
  small: {
    height: 200,
  },
};

const figStyles = {
  small: {
    float: 'left',
    margin: 20,
  },
};


const Video = ({ src, caption, display, onMouseEnter, onMouseLeave, isHovered }) => (
  <figure
    className={!isHovered ? 'Video-wrap' : 'Video-wrap hovered'}
    style={figStyles[display]}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    { isHovered && caption && <span className="Video-caption" >{caption}</span>}
    <video className="Video" src={src} controls style={imgStyles[display]} />
  </figure>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovered: PropTypes.bool,
};

export default withHover(Video);