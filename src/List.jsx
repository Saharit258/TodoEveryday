import React from "react";
import { Button, Table } from "antd";

function List({ todos, remove, edit }) {
  const columns = [
    {
      title: "Todo",
      dataIndex: "text",
      key: "text",
      width: "400px",
      backgroundColor: "transparent",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button onClick={() => edit(record.id)}>edit</Button>
          <Button style={{marginLeft: '10px'}} onClick={() => remove(record.id)}>remove</Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={todos}
        columns={columns}
        style={{ backgroundColor: "transparent", borderColor: "#00ECFF" }}
      />
    </div>
  );
}

export default List;
