import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ className, avatarUrl }) => <img className={className} src={`https://www.geoguessr.com/images/auto/144/144/ce/0/plain/${avatarUrl}`} alt="avatar" />;

Avatar.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
