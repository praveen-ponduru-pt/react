import React, { useEffect, useMemo, useState } from "react";

interface TodoItem {
    id: number;
    task: string;
}

function ToDo() {

    const [addTaskItem, setAddTaskItem] = useState('');
    const [editTaskItem, setEditTaskItem] = useState('');
    const [editId, setEditId] = useState(0);

    const [todoList, setTodoList] = useState([
        { id: 1, task: "Task1" }
    ]);


    const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddTaskItem(e.target.value);
    }

    const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTaskItem(e.target.value);
    }

    const handleUpdate = () => {

    }

    const handleDelete = (id) => {

        todoList()
    }

    const addTask = (value: TodoItem) => {
        if (!value.task.trim()) return;
        setTodoList([...todoList, value]);
        setAddTaskItem('');
    }

    return (
        <>
            {/* <label>Search</label> */}
            <input type="text" value={addTaskItem} onChange={handleAddInput}></input>
            <button onClick={() => addTask({ id: todoList.length + 1, task: addTaskItem })}>Add Task</button >
            <table>
                <tbody>
                    {todoList.map((task) => (
                        <tr id={task.id.toString()} key={task.id}>
                            {(task.id == editId) ?
                                (<td><input type="text" value={editTaskItem} onClick={() => setEditTaskItem(task.task)} onChange={handleEditInput} /></td>) :
                                <td>{task.task}</td>}

                            {(task.id == editId) ?
                                (<td><button onClick={() => setEditId(task.id)}>Update</button></td>) :
                                <td><button>Edit</button></td>}

                            <td><button onClick={() => setEditId(task.id)}>{task.id == editId ? "Update" : "Edit"}</button></td>

                            <td><button onClick={() => handleDelete(task.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ToDo;