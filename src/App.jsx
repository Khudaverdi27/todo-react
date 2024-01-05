import { useState } from "react";
import TodoForm from "./components/Todoform";
import TodoItems from "./components/TodoItems";
import './assets/css/index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null); // edit modu ucun state

  const addTodo = (name) => {
    setTodos([...todos, { name, id: Math.random() }]);
  };

  const updateTask = (name) => {
    if (edit) { // edit durumu yoxla
      const updatedTodos = todos.map(todo => {
        if (todo.id === edit.id) {
          return { ...todo, name }; // Düzenlenmiş todoyu güncelle
        }
        return todo;
      });
      setTodos(updatedTodos); // update olunmus todo listesini ayarla
      setEdit(null); // update modunu bagla
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const oneEdit = (id) => {
    const findTodo = todos.find(todo => todo.id === id);

    if (findTodo) {
      setEdit(findTodo);

    }
  };


  return (
    <div className='w-[350px] mx-auto p-3 border rounded my-4 space-y-[10px] bg-gray-100'>
      <TodoForm onSaveClick={addTodo} updateTask={updateTask} edit={edit} />
      <TodoItems todos={todos} onDelete={deleteTodo} oneEdit={oneEdit} />
    </div>
  );
}

export default App;