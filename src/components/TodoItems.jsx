import { LuTrash2 } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";

function TodoItems({ todos, onDelete, oneEdit }) {
    return (
        <div className=' space-y-2'>
            {todos.map((todo, index) => (
                <div key={index} className="flex justify-between items-center border p-2 bg-white">
                    <span>{todo.name}</span>
                    <div className="space-x-2">
                    <button 
                    onClick={() => oneEdit(todo.id)} 
                    className="bg-green-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">
                     
                     <CiEdit />

                     </button>
                   
                    <button onClick={() => onDelete(todo.id)} 
                    className="bg-red-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">
                        <LuTrash2 />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoItems;
