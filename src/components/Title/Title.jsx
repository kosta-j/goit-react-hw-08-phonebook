import s from './Title.module.css';

function Title({ title }) {
  return <h2 className={s.title}>{title}</h2>;
}

export default Title;
