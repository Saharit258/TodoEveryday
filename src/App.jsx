import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
      const newTodo = { id: Date.now(), text: text };
      setTodos([...todos, newTodo]); 
  };

  const submit = () => {
    const inputElement = document.querySelector('input[type="text"]');
          addTodo(inputElement.value);
          inputElement.value = ""; 
  }

  const remove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  }

  const edits = (id) => {
    const editts = todos.find((todos) => todos.id === id);
    console.log(editts.text)

  }

  return (
    <>
      <div>
        <input type="text" />
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => edits(todo.id)}>Edit</button>
            <button onClick={() => remove(todo.id)}>remove</button>
          </tr>
        ))}
      </div>
    </>
  );
}

export default App;
