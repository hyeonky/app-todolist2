'use client'

import React, { useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'
import { mockTodoData } from '@/data/todoData'

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoData)

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString(),
    }
    setTodos([newTodo, ...todos])
  }

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      })
    )
  }

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex flex-col gap-4 p-8 pb-40">
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList
        mockTodoData={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  )
}

export default Todo
