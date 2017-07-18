import React, { PropTypes } from 'react';
import withHover from '../withHover';

import './Image.css';

const imgStyles = {
  medium: {
    height: '16vw',
  },
  small: {
    height: '10vw',
  },
};

const figStyles = {
  small: {
    margin: 10,
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  big: {
    fontSize: 40,
  },
};


const Image = ({ src, caption, display, onMouseEnter, onMouseLeave, isHovered, rightsHolder }) => (
  <figure
    className={!isHovered ? 'Image-wrap' : 'Image-wrap hovered'}
    style={figStyles[display]}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    { isHovered && caption && <span className="Image-caption" >{caption}</span>}
    <img className="Image" src={src} alt={caption} style={imgStyles[display]} />
    {rightsHolder && <span className="Image-rights">Image by: {rightsHolder}</span>}
  </figure>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovered: PropTypes.bool,
  rightsHolder: PropTypes.string,
};

export default withHover(Image);