import React, { useState } from "react";
import Input from './Inputpage'
import List from './List'

function App() {
  const [todos, setTodos] = useState([]);
  const [news, setNews] = useState("");
  const [edits, setEdits] = useState({ id: null, text: "" });

  const submit = () => {
    if (edits.id) {
      const newedit = todos.map((i) => {
        if (i.id === edits.id) return { ...i, text: news };
        return i;
      });
      setTodos(newedit);
      setNews("");
      setEdits({ id: null});
    } else {
      setTodos([...todos, { id: Date.now(), text: news }]);
      setNews("");
    }
  };

  const remove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  } 

  const edit = (id) => {
    const todoedit = todos.find((todos) => todos.id === id)
    setEdits({ id: todoedit.id, text: todoedit.text})
    setNews(todoedit.text)
  }

  return (
    <>
      <div className="bg-slate-800 h-[100vh] w-[100vw] items-center flex flex-col">
        <Input submit={submit} news={news} setNews={setNews}/>
        <List todos={todos} remove={remove} edit={edit}/>
      </div>
    </>
  );
}

export default App;
