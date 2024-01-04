function TodoItems({ todos, onDelete, oneEdit }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index} className="flex justify-between items-center border p-3">
                    <span>{todo.name}</span>
                    <button onClick={() => oneEdit(todo.id)} className="bg-green-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">Edit</button>
                    <button onClick={() => onDelete(todo.id)} className="bg-red-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TodoItems;
