import { LuTrash2 } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';

function TodoItems({ todos, onDelete, onEdit }) {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        if (checkedItems.includes(id)) {
            //remove check
            setCheckedItems(checkedItems.filter((itemId) => itemId !== id)); //return id

        } else {
            // add check
            setCheckedItems([id]);

        }

    };

    return (
        <div className=' space-y-2'>
            {todos.map((item, index) =>
                <div key={index} className={`flex justify-between items-center border p-2 bg-white ${checkedItems.includes(item.id) ? 'line-through' : ''}`}>
                    <div className="flex items-center">
                        <input type="checkbox" onChange={() => handleCheckboxChange(item.id)} />
                        <span className='ml-1 mb-1'>{item.name}</span>
                    </div>
                    <div className="space-x-2">
                        <button
                            onClick={() => onEdit(item.id)}
                            className="bg-green-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">
                            <CiEdit />
                        </button>
                        <button
                            onClick={() => onDelete(item.id)}
                            className="bg-red-500 px-3 py-2 rounded text-white inline-flex justify-center items-center">
                            <LuTrash2 />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItems;
