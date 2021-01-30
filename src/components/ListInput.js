import React, { useState } from "react";
// import ListOutput from "./ListOutput";

const ListInput = () => {
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, title: "Market", list: ["bread", "flour", "water"] },
  ]);

  let listItem = {
    id: shoppingLists.length + 1,
    title: title,
    list: list,
  };

  const addItem = (e) => {
    e.preventDefault();
    list.push(item);
    setList(list);
    setItem("");
  };

  const saveList = (listItem) => {
    const tmp = [...shoppingLists, listItem];
    console.log(tmp);
    setShoppingLists(tmp);
    setTitle("");
    setList([]);
    // console.log(shoppingLists);
  };

  const deleteList = (id) => {
    let tmp = shoppingLists.filter((el) => el.id !== id);
    console.log(tmp);
    setShoppingLists(tmp);
  };

  return (
    <>
      <div>
        <label htmlFor="title">Add title</label>
        <input
          type="text"
          placeholder="e.g.market"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="item">Add item</label>
        <input
          type="text"
          placeholder="e.g.bread"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addItem}>+</button>
      </div>
      <div>
        <h4>{listItem.title}</h4>
        <ul>
          {listItem.list.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button onClick={() => saveList(listItem)}>save list</button>
      </div>
      {/* <ListOutput listItem={listItem} saveList={saveList} /> */}
      <div>
        {shoppingLists.map((el) => {
          const { id, title, list } = el;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <ul key={title}>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button onClick={() => deleteList(id)}>x</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListInput;
