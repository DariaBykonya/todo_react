import { Dispatch } from 'react';
import { clearCompletedDeals } from '../../redux/features/dealsSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import styles from './styles.module.css';

type ITabs = {
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>
}

export default function Tabs({ activeTab, setActiveTab }: ITabs) {

  const dispatch = useDispatch();

  const deals = useAppSelector((state) => state.dealsSlice.deals);

  const counterDeals = deals.filter((deal) => {
    if (deal.isDone) return false;
    return true;
  })

  return (
    <div className={styles.control}>

      <p className={styles.counter_length}>{`${counterDeals.length} items left`}</p>
      <div className={styles.tabs}>
        <button onClick={() => setActiveTab('all')} className={`${activeTab === 'all' && styles.tabs_active} ${styles.tabs_button}`}>All</button>
        <button onClick={() => setActiveTab('active')} className={`${activeTab === 'active' && styles.tabs_active} ${styles.tabs_button}`}>Active</button>
        <button onClick={() => setActiveTab('completed')} className={`${activeTab === 'completed' && styles.tabs_active} ${styles.tabs_button}`}>Completed</button>
      </div>
      <button onClick={() => dispatch(clearCompletedDeals())} className={styles.button_clear}>Clear completed</button>
  </div>
  )
}