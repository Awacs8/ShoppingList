import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ListWrapper = () => {
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, title: "Market", list: ["bread", "flour", "water"] },
  ]);

  let listItem = {
    id: uuidv4(),
    title: title,
    list: list,
  };

  const addItem = (e) => {
    e.preventDefault();
    const tmp = [...list, item];
    setList(tmp);
    setItem("");
  };

  const saveList = (listItem) => {
    const tmp = [...shoppingLists, listItem];
    setShoppingLists(tmp);
    setTitle("");
    setList([]);
  };

  const deleteList = (id) => {
    let tmp = shoppingLists.filter((el) => el.id !== id);
    setShoppingLists(tmp);
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
                  placeholder="e.g.market"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="item">Add item</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g.bread"
                  name="item"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
                <Button variant="outline-dark" size="sm" onClick={addItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                  </svg>
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col className="output">
            <h4>{listItem.title}</h4>
            <Button variant="outline-dark" onClick={() => saveList(listItem)}>
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
          {shoppingLists.map((el) => {
            const { id, title, list } = el;
            return (
              <Col key={id} className="card">
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => deleteList(id)}
                >
                  x
                </Button>
                <h4>{title}</h4>
                <ul key={title}>
                  {list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ListWrapper;
