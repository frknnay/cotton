import { useDragDrop } from 'context/drag-drop';
import { useCallback, useMemo, useRef } from 'react';

let currentNode;
let nodeOffsetX;
let nodeOffsetY;

function Draggable({ children }) {
  const elementRef = useRef(null);

  const { handleDragBegin, handleDragEnd } = useDragDrop();

  const beginDrag = useCallback((e) => {
    handleDragBegin(elementRef.current);
    Object.assign(elementRef.current.style, {
      pointerEvents: 'none',
      userSelect: 'none',
      width: `${elementRef.current.offsetWidth}px`,
      height: `${elementRef.current.offsetHeight}px`
    });
    nodeOffsetX = e.nativeEvent.offsetX + 5;
    nodeOffsetY = e.nativeEvent.offsetY + 5;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, []);

  const onMouseMove = useCallback((e) => {
    Object.assign(elementRef.current.style, {
      position: 'fixed',
      width: `${e.currentTarget.offsetWidth}px`,
      height: `${e.currentTarget.offsetHeight}px`,
      left: `${e.pageX - nodeOffsetX}px`,
      top: `${e.pageY - nodeOffsetY}px`
    });
  }, []);

  const onMouseUp = useCallback(() => {
    elementRef.current.style = '';
    nodeOffsetX = null;
    nodeOffsetY = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    handleDragEnd();
  }, []);

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
