import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ReactComponent as CartBtn } from "../assets/img/cart.svg";

const CreateList = ({ addItem, setTitle, title }) => {
  //const [item, setItem] = useState({ text: "", done: false });
  const [item, setItem] = useState("");

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let tmp = e.target.value;
  //   setItem({ ...item, [name]: tmp });
  // };

  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="title">Add title</Form.Label>
        <Form.Control
          type="text"
          placeholder="e. g. market"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="item">Add item</Form.Label>
        <Form.Control
          type="text"
          placeholder="e. g. milk"
          name="item"
          value={item}
          //onChange={handleChange}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => {
            //console.log(item);
            addItem(item);
            setItem("");
          }}
        >
          <CartBtn />
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateList;
