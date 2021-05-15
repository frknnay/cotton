import { useDragDrop } from 'context/drag-drop';
import { useCallback, useMemo, useRef } from 'react';

function Droppable({ children }) {
  const elementRef = useRef(null);

  const { draggingElement } = useDragDrop();

  const dropItem = useCallback((e) => {
    const droppable = e.currentTarget;
    droppable.appendChild(draggingElement.current);
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
