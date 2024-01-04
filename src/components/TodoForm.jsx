import { useState, useEffect } from 'react';

function TodoForm({ onSaveClick, updateTask, edit }) {
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (edit) {
            setName(edit.name);
            setIsEditing(true);
        } else {
            setName('');
            setIsEditing(false);
        }
    }, [edit]);

    const handleClick = () => {
        if (name.trim()) {
            if (isEditing) {
                updateTask(name);
                setIsEditing(false);
            } else {
                onSaveClick(name);
            }
            setName('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.code === 'Enter') handleClick();
    };

    return (
        <div className="flex space-x-[10px]">
            <input
                value={name}
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="flex-1 border px-4 h-[35px]"
            />
            <button
                disabled={!name.trim()}
                onClick={() => handleClick()}
                className="disabled:opacity-40 bg-blue-500 rounded p-2 text-white"
            >
                {isEditing ? 'Update' : 'Add'}
            </button>
        </div>
    );
}

export default TodoForm;
