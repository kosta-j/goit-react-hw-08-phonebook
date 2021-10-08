import Title from '../Title/Title';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <Title title={title} />
      {children}
    </section>
  );
}

export default Section;
