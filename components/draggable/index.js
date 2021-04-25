import { useDragDrop } from 'context/drag-drop';
import { useMemo, useRef } from 'react';

function Draggable({ children }) {
  const elementRef = useRef(null);

  const { beginDrag } = useDragDrop();

  const draggableProps = {
    onMouseDown: (e) => {
      beginDrag(e);
    }
  };

  const provied = useMemo(
    () => ({
      ref: elementRef,
      draggableProps: draggableProps
    }),
    [draggableProps]
  );

  return children(provied);
}

export { Draggable };
