import React from "react";
import { Input, Button } from "antd";

function Inputpage({ submit, news, setNews }) {
  return (
    <div className="flex items-center mb-4" style={{ marginTop: "20px" }}>
      <Input
        value={news}
        onChange={(e) => setNews(e.target.value)}
        style={{
          width: "300px",
          borderWidth: "2px",
          backgroundColor: "transparent",
          borderColor: "#FFE400",
          color: "#FFFFFF",
        }}
      ></Input>
      <Button
        onClick={submit}
        style={{
          marginLeft: "10px",
          borderWidth: "2px",
          backgroundColor: "transparent",
          borderColor: "#FFE400",
          color: "#FFFFFF",
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default Inputpage;
