import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import moment from "moment";

const SavedLists = ({ shoppingLists, deleteList }) => {
  return shoppingLists.map((item) => (
    <Col className="card" key={item.id}>
      <Button variant="danger" size="sm" onClick={() => deleteList(item.id)}>
        x
      </Button>
      <h5>{item.title}</h5>
      <ul>
        {item.list.map((el) => (
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
