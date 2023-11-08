import { setFilter } from 'redux/filterSlise';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label className={styles.labelFilter}>
      Find contact by name
      <input
        className={styles.inputFilter}
        type="text"
        name="filter"
        onChange={onChange}
        pattern="^[a-zA-Z]+$"
      />
    </label>
  );
};
