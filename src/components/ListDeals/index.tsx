import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Tabs from "../Tabs";
import { deleteDeal, toggleDealStatus } from "../../redux/features/dealsSlice";
import styles from './styles.module.css';

export default function ListDeals() {
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState<string>('all');

  const deals = useAppSelector((state) => state.dealsSlice.deals);

  const filtredDeals = deals.filter((deal) => {
    if (activeTab === 'active') return !deal.isDone;
    if (activeTab === 'completed') return deal.isDone;
    return true;
  })

  const handleToggleStatus = (id: string) => {
    dispatch(toggleDealStatus(id)); // Вызываем экшн для изменения статуса задачи
  };

  const handleDelete = (id: string) => {
    dispatch(deleteDeal(id));
  };

  return (
    <section>
      <ul className={styles.list}>
        {filtredDeals.length ? (
          filtredDeals.map((item, index) => (
            <li key={index} className={styles.deal}>
              <button className={`${styles.deal__button} ${item.isDone && styles.deal__button_done}`} onClick={() => handleToggleStatus(item.id)}></button>
              <p className={`${styles.deal__text} ${item.isDone && styles.deal__text_done}`}>{item.text}</p>
              <button className={styles.deal__button_close} onClick={() => handleDelete(item.id)}></button>
            </li>
          ))
        ) : (
          <p className={styles.list__text_empty}>Todo list is empty</p>
        )
        }
      </ul>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  )
}