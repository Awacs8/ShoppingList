import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import CardPreview from "./CardPreview";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ReactComponent as CartBtn } from "../assets/icons/cart.svg";

const NewCard = ({ saveList }) => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState("");

  const addItem = () => {
    const tmp = [...list, listItem];
    setList([...new Set(tmp)]);
  };
  const removeItem = (el) => {
    const tmp = list.filter((item) => item !== el);
    setList(tmp);
  };

  let item = {
    id: uuidv4(),
    title: title,
    list: list,
    createdat: moment().format("lll"),
  };

  return (
    <>
      <Row xs={1} md={2} lg={2}>
        <Col>
          <h4>make a list</h4>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="title">add title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e. g. market"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="item">add item</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="e. g. milk"
                  name="listItem"
                  value={listItem}
                  onChange={(e) => setListItem(e.target.value)}
                />
                <InputGroup.Text id="basic-addon1">
                  <Button
                    variant="secondary"
                    size="sm"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem();
                      setListItem("");
                    }}
                  >
                    <CartBtn />
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col className="output">
          <h4>list preview</h4>
          <CardPreview
            item={item}
            saveList={saveList}
            removeItem={removeItem}
            setTitle={setTitle}
            setList={setList}
          />
        </Col>
      </Row>
    </>
  );
};

export default NewCard;
