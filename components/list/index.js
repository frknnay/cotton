import { Droppable } from 'context/drag-drop/components/droppable';
import styles from './style.module.scss';

function List({ children }) {
  return <div className={styles['list']}>{children}</div>;
}

function ListTitle({ children }) {
  return <div className={styles['list-title']}>{children}</div>;
}

function ListCardContainer({ listId, children }) {
  return (
    <Droppable>
      {(provied) => (
        <div
          className={styles['list-card-container']}
          {...provied.droppableProps}
          data-deneme={listId}
        >
          {children}
        </div>
      )}
    </Droppable>
  );
}

List.Title = ListTitle;
List.CardContainer = ListCardContainer;

export { List };
