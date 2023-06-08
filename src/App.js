import React, { useState } from "react";
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleEditItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = inputValue;
    setItems(updatedItems);
    setInputValue("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div style={{ backgroundColor:"gray" }}>
      <h1>Create your list</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        style={{ backgroundColor: "greenyellow" }}
        onClick={handleAddItem}
      >
        Add
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              style={{ backgroundColor: "yellow" }}
              onClick={() => handleEditItem(index)}
            >
              Edit
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
