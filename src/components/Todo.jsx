import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="mx-auto mt-5 px-10 py-5 w-[500px] flex justify-between bg-violet-500 items-center">
      <p
        className={`text-white text-2xl font-medium cursor-pointer ${
          task.completed ? 'line-through' : ''
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex gap-5">
        <FiEdit
          size={20}
          className="text-white cursor-pointer"
          onClick={() => editTodo(task.id)}
        />
        <FaTrash
          size={20}
          className="text-white cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
