import React, { useState, useEffect } from "react";
import { useEasybase } from "easybase-react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import CreateList from "../components/CreateList";
import ListPreview from "../components/ListPreview";
import SavedLists from "../components/SavedLists";

const ListWrapper = () => {
  const {
    Frame,
    sync,
    configureFrame,
    addRecord,
    deleteRecord,
  } = useEasybase();
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    configureFrame({ tableName: "SHOPPING LIST", limit: 10 });
    sync();
  }, [configureFrame, sync]);

  const addItem = (item) => {
    const tmp = [...list, item];
    setList([...new Set(tmp)]);
  };

  const removeItem = (el) => {
    const tmp = list.filter((item) => item !== el);
    setList(tmp);
  };

  let listItem = {
    id: uuidv4(),
    title: title,
    list: list,
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
        <Row xs={1} md={2} lg={2}>
          <Col>
            <h4>make a list</h4>
            <CreateList addItem={addItem} setTitle={setTitle} title={title} />
          </Col>

          <Col className="output">
            <h4>list preview</h4>
            <ListPreview
              listItem={listItem}
              saveList={saveList}
              removeItem={removeItem}
            />
          </Col>
        </Row>
        <h4>saved lists</h4>
        <Row lg={3} md={2} xs={1}>
          <SavedLists Frame={Frame} deleteList={deleteList} />
        </Row>
      </Container>
    </>
  );
};

export default ListWrapper;
