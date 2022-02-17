import React from "react";
import { Row } from "react-bootstrap";
import Card from "./Card";

const SavedCards = ({ shoppingList, deleteList }) => {
  return (
    <>
      <h4>saved lists</h4>
      <Row lg={3} md={2} xs={1}>
        {shoppingList.map((item) => {
          return <Card item={item} deleteList={deleteList} key={item.id} />;
        })}
      </Row>
    </>
  );
};

export default SavedCards;
