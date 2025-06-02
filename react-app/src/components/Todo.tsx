import React, { useState } from "react";

interface TodoItem {
    id: number;
    task: string;
}

function ToDo() {
    const [addTaskItem, setAddTaskItem] = useState('');
    const [editTaskItem, setEditTaskItem] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    const [todoList, setTodoList] = useState<TodoItem[]>([
        { id: 1, task: "Task1" }
    ]);

    const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddTaskItem(e.target.value);
    }

    const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTaskItem(e.target.value);
    }

    const handleUpdate = (id: number) => {
        if (!editTaskItem.trim()) return;

        setTodoList(todoList.map(task =>
            task.id === id ? { ...task, task: editTaskItem } : task
        ));
        setEditId(null);
        setEditTaskItem('');
    }

    const handleDelete = (id: number) => {
        setTodoList(todoList.filter(task => task.id !== id));
        if (editId === id) {
            setEditId(null);
            setEditTaskItem('');
        }
    }

    const addTask = (value: TodoItem) => {
        if (!value.task.trim()) return;
        setTodoList([...todoList, value]);
        setAddTaskItem('');
    }

    const startEdit = (task: TodoItem) => {
        setEditId(task.id);
        setEditTaskItem(task.task);
    }

    return (
        <>
            <div className="todo">
                <input type="text" value={addTaskItem} onChange={handleAddInput} placeholder="Add new task" />
                <button onClick={() => addTask({ id: Date.now(), task: addTaskItem })}>Add Task</button>

                <table>
                    <tbody>
                        {todoList.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id === editId ? (<input type="text" value={editTaskItem} onChange={handleEditInput} />) :
                                    (task.task)}
                                </td>

                                <td>{task.id === editId ? (<button onClick={() => handleUpdate(task.id)}>Update</button>) :
                                    (<button onClick={() => startEdit(task)}>Edit</button>)}
                                </td>

                                <td><button onClick={() => handleDelete(task.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ToDo;
