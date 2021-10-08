import { useSelector } from 'react-redux';
import { getContacts } from '../../Redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';
import s from './Wrapper.module.css';

export default function Wrapper() {
  const contacts = useSelector(getContacts);

  return (
    <div className={s.wrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
