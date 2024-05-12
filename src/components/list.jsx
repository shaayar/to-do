import React from 'react'

const List = ({ todos, setTodos, setEditTodo }) => {

  const handleComplete = ({ id }) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleEdit = ({ id }) => {
    setEditTodo(todos.find((todo) => todo.id === id));
  }
  
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className='todo-list' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default List