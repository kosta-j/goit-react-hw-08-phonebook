import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/selectors';
import * as actions from '../../Redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.inputTitle}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
      />
    </label>
  );
}
