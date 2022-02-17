import React, { useState } from "react";
//import { useEasybase } from "easybase-react";
import { Container } from "react-bootstrap";
import NewCard from "../components/NewCard";
import SavedCards from "../components/SavedCards";

const Wrapper = () => {
  // const {
  //   Frame,
  //   sync,
  //   configureFrame,
  //   addRecord,
  //   deleteRecord,
  // } = useEasybase();

  const [shoppingList, setShoppingList] = useState([
    {
      id: 1,
      title: "Market",
      list: ["bread", "flour", "water"],
      createdat: "Feb 12, 2021 6:45 PM",
    },
  ]);

  // useEffect(() => {
  //   configureFrame({ tableName: "SHOPPINGAPP", limit: 10 });
  //   sync();
  // }, []);

  const saveList = (item) => {
    // save list on easybase
    // addRecord({
    //   tableName: "SHOPPINGAPP",
    //   newRecord: {
    //     title: title,
    //     itemlist: list.toString(),
    //     createdAt: new Date().toString(),
    //   },
    // });
    //sync();

    const tmp = [...shoppingList, item];
    setShoppingList(tmp);
  };

  const deleteList = (id) => {
    // delete list from easybase
    // deleteRecord({
    //   record: Frame(index),
    //   tableName: "SHOPPINGAPP",
    // });
    // Frame().splice(index, 1);
    //sync();
    let tmp = shoppingList.filter((el) => el.id !== id);
    setShoppingList(tmp);
  };

  return (
    <>
      <Container>
        <NewCard saveList={saveList} />
        <SavedCards shoppingList={shoppingList} deleteList={deleteList} />
      </Container>
    </>
  );
};

export default Wrapper;
