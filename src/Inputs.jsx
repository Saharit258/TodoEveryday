import React, { useState } from 'react';
import { Input, Button } from "antd";

function Inputs({ addTodo, news, setNews }) {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Input
          type="text"
          value={news}
          onChange={(e) => setNews(e.target.value)}
          style={{
            borderWidth: "2px",
            borderColor: "#00ECFF",
            backgroundColor: "transparent",
            width: "400px",
            color: "#FFFFFF",
          }}
        />
        <Button
          onClick={addTodo}
          style={{
            marginLeft: "10px",
            borderColor: "#00ECFF",
            color: "#00ECFF",
          }}
          className="hover:!bg-gray-700"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Inputs;
