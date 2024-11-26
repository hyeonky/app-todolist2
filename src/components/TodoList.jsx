import React, { useMemo, useState } from 'react'
import TodoItem from './TodoItem'
import { set } from 'date-fns'
import { useTodo } from '@/contexts/TodoContext'

const TodoList = () => {
  const [search, setSearch] = useState('')
  const { onUpdate, onDelete, todos } = useTodo()

  const filteredTodos = useMemo(() => {
    return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
  }, [todos, search])

  // 이 함수가 의존하는 todos 상태가 변경될 때마다 lookBack 함수가 다시 실행되고 있음
  //   React의 Strict Mode로 인한 3배수 효과
  // React 18의 Strict Mode는 개발 환경에서 컴포넌트를 두 번 렌더링합니다.
  // 따라서 위의 3번 호출이 개발 환경에서 3번 발생하게 됩니다.
  // 그래서 최종적으로: 3(JSX에서의 호출) × 3(Strict Mode로 인한 반복) = 9번 호출
  const lookBack = useMemo(() => {
    console.log('lookback')
    const total = todos.length
    const done = todos.filter((todo) => todo.isDone).length
    const left = total - done
    return { total, done, left }
  }, [todos])

  return (
    <div>
      <h2>할 일 목록</h2>

      <input
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="검색어를 입력하세요."
        className="p-3 text-black w-full"
      />
      <div>
        {lookBack.total}개 중에 {lookBack.done}개 완료, {lookBack.left}개 남음
      </div>
      <ul className="mt-5 flex flex-col gap-2 divide-y">
        {filteredTodos.map(
          (item) => (
            console.log(item),
            (
              <TodoItem
                key={item.id}
                {...item}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            )
          )
        )}
      </ul>
    </div>
  )
}

export default TodoList
