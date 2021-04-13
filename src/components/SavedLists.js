import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import moment from "moment";

const SavedLists = ({ Frame, deleteList }) => {
  return Frame().map((item, index) => (
    <Col className="card" key={index}>
      <Button variant="danger" size="sm" onClick={() => deleteList(index)}>
        x
      </Button>
      <h5>{item.title}</h5>
      <ul>
        {item.itemlist.split(",").map((el) => (
          <li key={el}>
            <span>{el}</span>
            <Form.Check type="checkbox" />{" "}
          </li>
        ))}
      </ul>
      <small>Created at: {moment(item.createdat).format("lll")}</small>
    </Col>
  ));
};

export default SavedLists;
