import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [news, setNews] = useState("");
  const [edit, setEdit] = useState({ id: null, text: "" });

  const submit = () => {
    if (edit.id) {
      const edits = todos.map((i) => {
        if (i.id === edit.id) return { ...i, text: news };
        return i;
      });
      setTodos(edits);
      setNews("");
      setEdit(undefined);
    } else {
      setTodos([...todos, { id: Date.now(), text: news }]);
      setNews("");
    }
  };

  const remove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const edits = (id) => {
    const edittext = todos.find((todos) => todos.id === id);
    setEdit({ id: edittext.id, text: edittext.text });
    setNews(edittext.text);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={news}
          onChange={(e) => setNews(e.target.value)}
        />
        <button onClick={submit}>submit</button>
      </div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <span>{todo.text}</span>
            <button onClick={() => edits(todo.id)}>edit</button>
            <button onClick={() => remove(todo.id)}>remove</button>
          </div>
        ))}
      </div>
      </div>
  );
}

export default App;
