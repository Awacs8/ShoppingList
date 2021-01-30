import React from "react";

const ListOutput = ({ listItem, saveList }) => {
  return (
    <div>
      <h4>{listItem.title}</h4>
      <ul>
        {listItem.list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <button onClick={() => saveList(listItem)}>save list</button>
    </div>
  );
};

export default ListOutput;
