import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Section from '../../components/Filter';
import s from './Wrapper.module.css';

export default function ContactsView() {
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
