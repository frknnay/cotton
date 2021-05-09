import { Draggable } from '@components/draggable';
import styles from './style.module.scss';

function Card({ children }) {
  return (
    <Draggable>
      {(provied) => (
        <div className={styles['card']} {...provied.draggableProps}>
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
