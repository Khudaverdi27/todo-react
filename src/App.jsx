import { useState } from 'react';
import './assets/css/index.css';
import TodoForm from './components/Todoform';
import TodoItems from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState([])
  const [editItem, setEditItem] = useState(false)

  const saveTodos = (value) => {
    setTodos((prevTodo) => [...prevTodo, { name: value, id: Math.random() }])
  }

  const onDelete = (deletedId) => {
    setTodos(todos.filter(todos => todos.id !== deletedId))
  }
  const onEdit = (editedTodo) => {
    const findTodo = todos.find(todo => todo.id === editedTodo)

    setEditItem(findTodo);
  }

  const updateTask = (editName) => {
    if (editItem) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === editItem.id) {
          return { ...todo, name: editName }; // Update the name of the edited todo
        }
        return todo;
      });

      setTodos(updatedTodos); // Set the updated todos
      setEditItem(null); // Clear the editItem state
    }
  };




  return (
    <div className='w-[350px] mx-auto p-3 border rounded my-4 space-y-[10px] bg-gray-100'>
      <TodoForm saveTodos={saveTodos} updateTask={updateTask} edit={editItem} />
      <TodoItems todos={todos} onDelete={onDelete} onEdit={onEdit} />

    </div>
  );
}

export default App;