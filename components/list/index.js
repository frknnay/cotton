import styles from './style.module.scss';

function List({ children }) {
  return <div className={styles['list']}>{children}</div>;
}

function ListTitle({ children }) {
  return <div className={styles['list-title']}>{children}</div>;
}

function ListCardContainer({ children }) {
  return <div className={styles['list-card-container']}>{children}</div>;
}

List.Title = ListTitle;
List.CardContainer = ListCardContainer;

export { List };
