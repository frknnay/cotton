import React, { useContext, useRef, useState } from 'react';

const DragDropContext = React.createContext();

function DragDropProvider({ children }) {
  const [isDragging, setIsDragging] = useState(false);
  const draggingElement = useRef(null);

  const handleDragBegin = (_element) => {
    draggingElement.current = _element;
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    draggingElement.current = null;
    setIsDragging(false);
  };

  const value = { isDragging, draggingElement, handleDragBegin, handleDragEnd };

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
