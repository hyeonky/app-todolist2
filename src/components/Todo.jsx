'use client'

import React, { useEffect, useReducer, useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'
import { setTodos } from '@/reducers/todoReducers'

const Todo = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(setTodos, [])

  const onDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(savedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
