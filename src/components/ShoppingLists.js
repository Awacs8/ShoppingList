import React from "react";

const ShoppingLists = ({ shoppingLists }) => {
  return (
    <>
      {shoppingLists.map((el) => (
        <div>
          <h4>{el.title}</h4>
          <ul key={el.title}>
            {el.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button>x</button>
        </div>
      ))}
      {/* <ul>
        <li>bread</li>
        <li>water</li>
        <li>chocolate</li>
        <li>cheeese</li>
        <li>sour milk</li>
      </ul> */}
    </>
  );
};

export default ShoppingLists;
