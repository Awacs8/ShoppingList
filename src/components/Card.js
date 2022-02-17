import React from "react";
import { Button, Col } from "react-bootstrap";
import { ReactComponent as DeleteBtn } from "../assets/icons/x.svg";
import Item from "./Item";

const Card = ({ item, deleteList }) => {
  return (
    <Col className="card">
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
            <Item el={el} />
          </li>
        ))}
      </ul>
      <small>Created at {item.createdat}</small>
    </Col>
  );
};

export default Card;
