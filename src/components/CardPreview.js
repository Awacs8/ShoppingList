import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as DeleteBtn } from "../assets/icons/x.svg";
import { ReactComponent as SaveBtn } from "../assets/icons/checked.svg";

const ListPreview = ({ item, removeItem, saveList, setTitle, setList }) => {
  return (
    <>
      <h5>{item.title}</h5>
      <ul>
        {item.list.map((el) => (
          <li key={el}>
            <span>{el}</span>
            <Button size="sm" onClick={() => removeItem(el)} variant="light">
              <DeleteBtn />
            </Button>
          </li>
        ))}
      </ul>
      {item.list.length > 0 && (
        <Button
          variant="light"
          onClick={() => {
            saveList(item);
            setTitle("");
            setList([]);
          }}
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
