import React from "react";
import { Button } from "react-bootstrap";

const ListPreview = ({ listItem, saveList }) => {
  return (
    <>
      <h4>{listItem.title}</h4>
      <Button variant="outline-dark" onClick={(_) => saveList()}>
        save
      </Button>
      <ul>
        {listItem.list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default ListPreview;
