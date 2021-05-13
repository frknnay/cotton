import { Draggable } from 'context/drag-drop/components/draggable';
import styles from './style.module.scss';

function Card({ children }) {
  return (
    <Draggable>
      {(provied) => (
        <div
          className={styles['card']}
          {...provied.draggableProps}
          ref={provied.ref}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
}

function CardTitle({ children }) {
  return <div className={styles['card-title']}>{children}</div>;
}

Card.Title = CardTitle;

export { Card };
