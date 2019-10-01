import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

function withDroppable (Component) {
  return function WrapperComponent ({ children, ...droppableProps }) {
    return (
      <Droppable {...droppableProps} maxHeight="120px">
        {provided => (
          
          <Component ref={provided.innerRef} {...provided.droppableProps}>
            {children}
            {provided.placeholder}
          </Component>
          
        )}
      </Droppable>
    )
  }
}

export default withDroppable
