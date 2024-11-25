export const setTodos = (state, action) => {
  // action = {type: 'DELETE_TODO', payload: {id: 1}}
  // state = [{id: 1, task: '할일', isDone: false}, {...}, {...}]
  switch (action.type) {
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id)
  }
}
