import React, { useState, ChangeEvent } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>TO-DO-LIST</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter a Task..'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>Add</button>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                            <button className='moveup-button' onClick={() => moveTaskUp(index)}>⬆️</button>
                            <button className='movedown-button' onClick={() => moveTaskDown(index)}>⬇️</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Todolist;
