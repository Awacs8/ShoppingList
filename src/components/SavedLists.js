import React from "react";
import { Col, Button } from "react-bootstrap";
import moment from "moment";

const SavedLists = ({ Frame, deleteList }) => {
  return Frame().map((item, index) => (
    <Col className="card" key={index}>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => deleteList(index)}
      >
        x
      </Button>
      <h5>{item.title}</h5>
      <ul>
        {item.itemlist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <small>Created at: {moment(item.createdat).format("lll")}</small>
    </Col>
  ));
};

export default SavedLists;
