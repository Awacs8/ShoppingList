import React, { useState, useEffect } from "react";
import { useEasybase } from "easybase-react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ReactComponent as CartBtn } from "../assets/img/cart.svg";

const ListWrapper = () => {
  const {
    Frame,
    sync,
    configureFrame,
    addRecord,
    deleteRecord,
  } = useEasybase();
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    configureFrame({ tableName: "SHOPPING LIST", limit: 10 });
    sync();
  }, [configureFrame, sync]);

  let listItem = {
    id: uuidv4(),
    title: title,
    list: list,
  };

  const addItem = (e) => {
    e.preventDefault();
    const tmp = [...list, item];
    setList([...new Set(tmp)]);
    setItem("");
  };

  const saveList = () => {
    addRecord({
      tableName: "SHOPPING LIST",
      newRecord: {
        title: title,
        itemList: list,
        createdAt: new Date().toString(),
      },
    });
    setTitle("");
    setList([]);
    sync();
  };

  const deleteList = (index) => {
    deleteRecord({
      record: Frame(index),
      tableName: "SHOPPING LIST",
    });
    // Frame().splice(index, 1);
    sync();
  };

  return (
    <>
      <Container>
        <h4>make a list</h4>

        <Row xs={1} md={2} lg={2}>
          <Col>
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
                  onChange={(e) => setItem(e.target.value)}
                />
                <Button variant="outline-dark" size="sm" onClick={addItem}>
                  <CartBtn />
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col className="output">
            <h4>{listItem.title}</h4>
            <Button variant="outline-dark" onClick={(_) => saveList()}>
              save
            </Button>
            <ul>
              {listItem.list.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <h4>saved lists</h4>
        <Row lg={3} md={2} xs={1}>
          {Frame().map((item, index) => (
            <Col className="card" key={index}>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => deleteList(index)}
              >
                x
              </Button>
              <h4>{item.title}</h4>
              <ul key={title}>
                {item.itemlist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <small>Created at: {item.createdat}</small>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListWrapper;
