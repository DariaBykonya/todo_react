import InputForSearching from '../InputForSearching';
import ListDeals from '../ListDeals';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDoS</h1>
      <InputForSearching />
      <ListDeals />
    </div>
  );
}

export default App;
