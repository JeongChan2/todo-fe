import React from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({item, getTasks}) => {

  const toggleComplete = async (id) => {
    try {
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !item.isComplete,
      });
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button onClick={() => deleteTask(item._id)} className="button-delete">삭제</button>
            <button onClick={() => toggleComplete(item._id)} className="button-delete">{item.isComplete?'안끝남':'끝남'}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
