import React from 'react'
import { Button } from "antd";

function List({ todos, remove, edit }) {
  return (
    <div>
        <table>
          <thead style={{ border: "2px solid #00ECFF" }}>
            <tr>
              <th style={{ color: "#FFFFFF", width: "700px" }}>รายการ</th>
              <th style={{ color: "#FFFFFF", width: "80px" }}>แก้ไข</th>
              <th style={{ color: "#FFFFFF", width: "80px" }}>ลบ</th>
            </tr>
          </thead>
          <tbody style={{ border: "2px solid #00ECFF" }}>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <span style={{ color: "#FFFFFF", padding: "10px" }}>
                    {todo.text}
                  </span>
                </td>
                <td style={{ padding: "10px" }}>
                  <Button
                    style={{
                      borderColor: "#00ECFF",
                      color: "#00ECFF",
                    }}
                    onClick={() => edit(todo.id)}
                    className="hover:!bg-gray-700"
                  >
                    edit
                  </Button>
                </td>
                <td style={{ padding: "10px" }}>
                  <Button
                    style={{
                      borderColor: "#00ECFF",
                      color: "#00ECFF",
                    }}
                    onClick={() => remove(todo.id)}
                    className="hover:!bg-gray-700"
                  >
                    remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default List