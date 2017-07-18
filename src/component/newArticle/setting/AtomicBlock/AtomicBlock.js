import React, { PropTypes } from 'react';
import Image from '../Image/Image';
import Video from '../Video/Video';

const typeMap = {
  image: Image,
  video: Video,
};

const AtomicBlock = ({ type, ...props }) => {
  const Component = typeMap[type];
  if (Component) {
    return <Component {...props} />;
  }
  return null;
};

AtomicBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AtomicBlock;