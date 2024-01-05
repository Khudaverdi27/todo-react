import { useState, useEffect } from "react";

function TodoForm({ saveTodos, updateTask, edit }) {
    const [value, setValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (edit) {
            setIsEditing(true);
            setValue(edit.name);
        } else {
            setIsEditing(false);
            setValue("");
        }
    }, [edit]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === "") return;

        if (isEditing) {
            updateTask(value);
            setIsEditing(false);
        } else {
            saveTodos(value);
        }

        setValue("");
    };

    return (
        <><h1 className="text-center text-xl font-bold">Your Todo App</h1>
            <form onSubmit={(e) => onSubmit(e)} className="flex space-x-[10px]">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="flex-1 border px-4 h-[35px]"
                />
                <button type="submit" className="disabled:opacity-40 bg-blue-500 rounded p-2 text-white">
                    {isEditing ? 'Update' : 'Add'}
                </button>
            </form>
        </>
    );
}

export default TodoForm;
