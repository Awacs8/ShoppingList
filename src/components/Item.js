import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as Done } from "../assets/icons/checked.svg";
import { ReactComponent as Circle } from "../assets/icons/circle.svg";

const Item = ({ el }) => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <>
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {el}
      </span>
      <Form.Label>
        <Form.Check
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          style={{ display: "none" }}
        ></Form.Check>
        {checked ? <Done /> : <Circle />}
      </Form.Label>
    </>
  );
};

export default Item;
