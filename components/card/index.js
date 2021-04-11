import styles from './style.module.scss';

function Card({ children }) {
  return <div className={styles['card']}>{children}</div>;
}

function CardTitle({ children }) {
  return <div className={styles['card-title']}>{children}</div>;
}

Card.Title = CardTitle;

export { Card };
