import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactItem({ name, number, children }) {
  return (
    <li className={s.item}>
      {name}: {number}
      {children}
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  children: PropTypes.node,
};

export default ContactItem;
