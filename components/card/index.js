import styles from './style.module.scss';

function Card({ elementRef, children, ...props }) {
  return (
    <div ref={elementRef} className={styles['card']} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return <div className={styles['card-title']}>{children}</div>;
}

Card.Title = CardTitle;

export { Card };
