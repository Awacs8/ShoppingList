import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as DeleteBtn } from "../assets/icons/x.svg";
import { ReactComponent as SaveBtn } from "../assets/icons/checked.svg";

const ListPreview = ({ listItem, removeItem, saveList }) => {
  return (
    <>
      <h5>{listItem.title}</h5>
      <ul>
        {listItem.list.map((el) => (
          <li key={el}>
            <span>{el}</span>
            <Button size="sm" onClick={() => removeItem(el)} variant="light">
              <DeleteBtn />
            </Button>
          </li>
        ))}
      </ul>
      {listItem.list.length > 0 && (
        <Button
          variant="light"
          onClick={() => saveList()}
          className="save-btn"
          data-bs-toggle="tooltip"
          title="save list"
        >
          <SaveBtn />
        </Button>
      )}
    </>
  );
};

export default ListPreview;
