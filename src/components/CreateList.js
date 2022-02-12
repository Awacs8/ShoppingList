import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { ReactComponent as CartBtn } from "../assets/icons/cart.svg";

const CreateList = ({ addItem, setTitle, title }) => {
  const [item, setItem] = useState("");

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
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="e. g. milk"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                addItem(item);
                setItem("");
              }}
            >
              <CartBtn />
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default CreateList;
