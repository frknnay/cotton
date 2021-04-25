import React, { useCallback, useContext } from 'react';

const DragDropContext = React.createContext();

let currentNode;
let nodeOffsetX;
let nodeOffsetY;

function DragDropProvider({ children }) {
  const beginDrag = useCallback((e) => {
    currentNode = e.currentTarget;
    currentNode.style.pointerEvents = 'none';
    currentNode.style.userSelect = 'none';
    nodeOffsetX = e.nativeEvent.offsetX + 5;
    nodeOffsetY = e.nativeEvent.offsetY + 5;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, []);

  const onMouseMove = useCallback((e) => {
    Object.assign(currentNode.style, {
      position: 'fixed',
      width: `${e.currentTarget.offsetWidth}px`,
      height: `${e.currentTarget.offsetHeight}px`,
      left: `${e.pageX - nodeOffsetX}px`,
      top: `${e.pageY - nodeOffsetY}px`,
      backgroundColor: 'pink'
    });
  }, []);

  const onMouseUp = useCallback(() => {
    currentNode.style.pointerEvents = 'inherit';
    currentNode = null;
    nodeOffsetX = null;
    nodeOffsetY = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }, []);

  const value = { beginDrag };

  return (
    <DragDropContext.Provider value={value}>
      {children}
    </DragDropContext.Provider>
  );
}

function useDragDrop() {
  const context = useContext(DragDropContext);

  if (!context) {
    throw new Error(
      'userDragDrop hook must be used within a DragDropProvider!'
    );
  }

  return context;
}

export { DragDropProvider, useDragDrop };
