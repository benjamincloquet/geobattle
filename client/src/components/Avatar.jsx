import React from 'react';
import PropTypes from 'prop-types';
import useAvatar from '../useAvatar';

const Avatar = ({ className, profileId }) => {
  const avatar = useAvatar(profileId);

  return <img className={className} src={avatar} alt="avatar" />;
};

Avatar.propTypes = {
  className: PropTypes.string,
  profileId: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
