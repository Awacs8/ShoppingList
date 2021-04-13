import React, { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";
import moment from "moment";

const SavedLists = ({ Frame, deleteList }) => {
  const [done, setDone] = useState(false);
  return Frame().map((item, index) => (
    <Col className="card" key={index}>
      <Button variant="danger" size="sm" onClick={() => deleteList(index)}>
        x
      </Button>
      <h5>{item.title}</h5>
      <ul>
        {item.itemlist.split(",").map((el) => (
          <li
            key={el}
            //style={{ textDecoration: done ? "line-through" : "none" }}
          >
            <span>{el}</span>
            <Form.Check type="checkbox" onChange={() => setDone(!done)} />{" "}
          </li>
        ))}
      </ul>
      <small>Created at: {moment(item.createdat).format("lll")}</small>
    </Col>
  ));
};

export default SavedLists;
