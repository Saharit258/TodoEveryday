import React, { useState } from "react";
import { Input, Button, Modal, List, Layout } from "antd";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      setEdits(undefined);
      setIsModalVisible(false);
    } else {
      setTodos([...todos, { id: Date.now(), text: news }]);
      setNews("");
      setIsModalVisible(false);
    }
  };

  const remove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const edit = (id) => {
    setIsModalVisible(true);
    const edittext = todos.find((todos) => todos.id === id);
    setEdits({ id: edittext.id, text: edittext.text });
    setNews(edittext.text);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout className="h-[100vh] w-[100vw] bg-red-300">
      <Button style={{ marginLeft: '1000px', marginTop: '20px', width: '100px', backgroundColor: '#81F0FF' }} onClick={showModal}>Input</Button>
      <div>
        <List
          dataSource={todos}
          style={{ height: '200px', width: '400px', marginLeft: '35%'}}
          renderItem={(todo) => (
            <List.Item style={{ borderradiu: '#8CAAFF' }}>
              <List.Item style={{ width: '100px', color: '#0043FF'}}><span>{todo.text}</span></List.Item>
              <List.Item style={{ width: '100px'}}><Button style={{ backgroundColor: '#B1FF81'}} onClick={() => edit(todo.id)}>edit</Button></List.Item>
              <List.Item style={{ width: '100px'}}><Button style={{ backgroundColor: '#FF8C8C'}} onClick={() => remove(todo.id)}>remove</Button></List.Item>
            </List.Item>
          )}
        />
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={submit}>
            Submit
          </Button>,
        ]}
        bodyStyle={{ height: "50px" }}
      >
        <Input
          value={news}
          onChange={(e) => setNews(e.target.value)}
          style={{ marginTop: "20px" }}
        ></Input>
      </Modal>
    </Layout>
  );
}

export default App;
