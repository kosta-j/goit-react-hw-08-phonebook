import PropTypes from 'prop-types';

function Notification({ text }) {
  return <p>{text}</p>;
}

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
