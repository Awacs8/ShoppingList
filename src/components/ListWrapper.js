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
  // const [shoppingLists, setShoppingLists] = useState([
  //   { id: 1, title: "Market", list: ["bread", "flour", "water"] },
  // ]);

  useEffect(() => {
    configureFrame({ tableName: "SHOPPING LIST", limit: 10 });
    sync();
  }, []);

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

  const saveList2 = () => {
    addRecord({
      tableName: "SHOPPING LIST",
      newRecord: {
        title: title,
        itemList: list,
        createdAt: new Date().toISOString(),
      },
    });

    setTitle("");
    setList([]);
    sync();
  };
  // const saveList = (listItem) => {
  //   const tmp = [...shoppingLists, listItem];
  //   setShoppingLists(tmp);
  //   setTitle("");
  //   setList([]);
  // };

  // const deleteList = (id) => {
  //   let tmp = shoppingLists.filter((el) => el.id !== id);
  //   setShoppingLists(tmp);
  // };

  const deleteList2 = (index) => {
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
            <Button variant="outline-dark" onClick={(_) => saveList2()}>
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
                onClick={() => deleteList2(index)}
              >
                x
              </Button>
              <h4>{item.title}</h4>
              <ul key={title}>
                {item.itemlist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* <p>{item.itemlist}</p> */}
              <small>Created at: {item.createdat}</small>
            </Col>
          ))}
          {/* {shoppingLists.map((el) => {
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
          })} */}
        </Row>
      </Container>
    </>
  );
};

export default ListWrapper;
