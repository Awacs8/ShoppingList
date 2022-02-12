import React from "react";
import { Button, Col } from "react-bootstrap";
import { ReactComponent as DeleteBtn } from "../assets/icons/x.svg";

import moment from "moment";

const SavedLists = ({ shoppingLists, deleteList }) => {
  return shoppingLists.map((item) => (
    <Col className="card" key={item.id}>
      <Button
        onClick={() => deleteList(item.id)}
        variant="light"
        className="btn-delete"
      >
        <DeleteBtn />
      </Button>

      <h5>{item.title}</h5>
      <ul>
        {item.list.map((el) => (
          <li key={el}>
            <span>{el}</span>
            {/* <Form.Check
              checked={isChecked}
              onChange={handleChange}
              name="isChecked"
            />{" "} */}
          </li>
        ))}
      </ul>
      <small>Created at: {moment(item.createdat).format("lll")}</small>
    </Col>
  ));
};

export default SavedLists;
