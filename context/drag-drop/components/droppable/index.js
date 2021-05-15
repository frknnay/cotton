import { useCallback, useMemo, useRef } from 'react';

function Droppable({ children }) {
  const elementRef = useRef(null);

  const dropItem = useCallback((e) => {
    const droppable = e.currentTarget;
    console.log(droppable.dataset.deneme);
  });

  const droppableProps = {
    onMouseUp: (e) => {
      dropItem(e);
    }
  };

  const provied = useMemo(
    () => ({
      ref: elementRef,
      droppableProps: droppableProps
    }),
    [droppableProps]
  );

  return children(provied);
}

export { Droppable };
