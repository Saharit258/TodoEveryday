import React, { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([]);
    const [news, setNews] = useState("");
    const [edit, setEdit] = useState({ id: null, text: ''})

    const addtodo = () => {
        if(edit.id){
            const edittodo = todos.map((i) => {
                if (i.id === edit.id) 
                return {...i , text: news}
                return i
            });
            setTodos(edittodo);
            setNews('')
            setEdit(undefined)
        } else {
        setTodos([...todos, { id: Date.now(), text: news}]);
        setNews('');
    }
    }

    const remove = (id) => {
        setTodos(todos.filter((todos) => todos.id !== id))
    }

    const edits = (id) => {
        const edittext = todos.find((todos) => todos.id === id)
        setEdit({ id: edittext.id, text: edittext.text})
        setNews(edittext.text) 
    }

  return (
    <>
    <div>
        <input type="text" value={news} onChange={(e) => setNews(e.target.value)}/>
        <button onClick={addtodo}>Submit</button>
      </div>
    <div>
        {todos.map((todo, i) => (
            <tr key={i}>
                <span>{todo.text}</span>
                <button onClick={() => edits(todo.id)}>Edit</button>
                <button onClick={() => remove(todo.id)}>remove</button>
            </tr>
        ))}

    </div>
    </>
  )
}

export default App