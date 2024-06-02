import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'reduxState/currencySlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeName = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={onChangeName}
    />
  );
};
