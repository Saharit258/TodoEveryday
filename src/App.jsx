import React, { useState } from "react";
import { Input, Button } from "antd";
import Inputs from './Inputs';
import List from './List';

function App() {
  const [todos, setTodos] = useState([]);
  const [news, setNews] = useState("");
  const [edittodo, setEdittodo] = useState({ id: null, text: "" });

  const addTodo = () => {
    if (edittodo.id) {
      const newtodo = todos.map((i) => {
        if (i.id === edittodo.id) return { ...i, text: news };
        return i;
      });
      setTodos(newtodo);
      setNews("");
      setEdittodo({ id: null, text: "" });
    } else {
      setTodos([...todos, { id: Date.now(), text: news }]);
      setNews("");
    }
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setEdittodo({ id: editTodo.id, text: editTodo.text });
    setNews(editTodo.text);
  };

  return (
    <div className="bg-slate-800 h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <Inputs addTodo={addTodo} news={news} setNews={setNews} />
      </div>
      <div>
        <List todos={todos} remove={remove} edit={edit}/>
      </div>
    </div>
  );
}

export default App;
