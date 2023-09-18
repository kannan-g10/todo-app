import React, { useState } from 'react';

const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    editTodo(value, task.id);
    setValue('');
  };

  return (
    <>
      <form
        className="h-28 mx-auto w-[500px] py-5 flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Update task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-10 m-2 px-4 py-2.5 w-[350px] text-white placeholder:text-gray-400 bg-transparent outline outline-violet-500"
        />
        <button
          className="h-10 w-52 bg-violet-500 text-white px-8 py-2.5 rounded font-semibold"
          type="submit"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
      {isEmpty && (
        <p className="text-red-600 text-center font-bold">
          Please enter a value
        </p>
      )}
    </>
  );
};

export default EditTodoForm;
