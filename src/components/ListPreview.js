import React from "react";
import { Button } from "react-bootstrap";

const ListPreview = ({ listItem, removeItem, saveList }) => {
  return (
    <>
      <h5>{listItem.title}</h5>
      <ul>
        {listItem.list.map((el) => (
          <li key={el}>
            <span>{el}</span>
            <Button variant="danger" size="sm" onClick={() => removeItem(el)}>
              x
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="outline-dark" onClick={(_) => saveList()}>
        save
      </Button>
    </>
  );
};

export default ListPreview;
