import React, { useState } from "react";
//import { useEasybase } from "easybase-react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import CreateList from "../components/CreateList";
import ListPreview from "../components/ListPreview";
import SavedLists from "../components/SavedLists";

const ListWrapper = () => {
  // const {
  //   Frame,
  //   sync,
  //   configureFrame,
  //   addRecord,
  //   deleteRecord,
  // } = useEasybase();

  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, title: "Market", list: ["bread", "flour", "water"] },
  ]);

  // useEffect(() => {
  //   configureFrame({ tableName: "SHOPPINGAPP", limit: 10 });
  //   sync();
  // }, []);

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
    // addRecord({
    //   tableName: "SHOPPINGAPP",
    //   newRecord: {
    //     title: title,
    //     itemlist: list.toString(),
    //     createdAt: new Date().toString(),
    //   },
    // });
    const tmp = [...shoppingLists, listItem];
    setShoppingLists(tmp);
    setTitle("");
    setList([]);
    //sync();
  };

  const deleteList = (id) => {
    // deleteRecord({
    //   record: Frame(index),
    //   tableName: "SHOPPINGAPP",
    // });
    // Frame().splice(index, 1);
    //sync();
    let tmp = shoppingLists.filter((el) => el.id !== id);
    setShoppingLists(tmp);
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
          <SavedLists shoppingLists={shoppingLists} deleteList={deleteList} />
        </Row>
      </Container>
    </>
  );
};

export default ListWrapper;
