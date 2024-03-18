import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [news, setNews] = useState("");
  const [edit, setEdit] = useState({ id: null, text: ""});

  const addtodo = () => {
    if(edit.id){
      const edittodo = todos.map((i)=>{
        if(i.id === edit.id)
        return{...i, text: news}
        return i
      });
      setTodos(edittodo);
      setNews("")
      setEdit(undefined)
    }else{
    setTodos([...todos, {id: Date.now(), text: news}]);
    setNews("")
  }
  }

  const remove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  }

  const editt = (id) => {
    const edits = todos.find((todos) => todos.id === id)
    setEdit({ id: edits.id , text: edits.text})
    setNews(edits.text)
  }



  return (
    <>
      <div>
        <input type="text" value={news} onChange={(e) => setNews(e.target.value)}/>
        <button onClick={addtodo}>ตกลง</button>
      </div>
      <div>
        {todos.map((todo,i) => (
          <div key={i}> 
                <span>{todo.text}</span>
                <button onClick={() => editt(todo.id)}>แก้ไข</button>
                <button onClick={() => remove(todo.id)}>ลบ</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App