import React from 'react'

const TodoItem = ({id, task, isDone, createDate, onUpdate }) => {
  return (
    <li key={id}>
      <input 
        type="checkbox" 
        checked={isDone} 
        onChange={() => {onUpdate(id)}} 
      />
      <strong>{task}</strong>
      <span>{createDate}</span>
      <button>삭제</button>
    </li>
  )
}

export default TodoItem