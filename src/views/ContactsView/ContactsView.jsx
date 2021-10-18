import { ContactForm } from '../../components';
import { ContactList } from '../../components';
import { Filter } from '../../components';
import { Section } from '../../components';
import s from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
