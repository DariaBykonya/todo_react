import { useState } from 'react';
import { useDispatch } from 'react-redux';
import IDeal from '../../interface/IDeal';
import { addDeal } from '../../redux/features/dealsSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.css';

export default function InputForSearching() {

  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  
  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(inputValue.trim()) {
      const newDeal: IDeal = {
        id: uuidv4(),
        isDone: false,
        text: inputValue
      }
    dispatch(addDeal(newDeal));
    setInputValue("");
    }
  }
  
  return (
    <>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <input
          type="text"
          name="search"
          required
          placeholder="What needs to be done?"
          className={styles.form__input}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className={styles.form__button}
        >
          Add
        </button>
      </form>
    </>
  )
}