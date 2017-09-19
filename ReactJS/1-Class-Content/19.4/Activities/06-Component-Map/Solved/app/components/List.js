import React from "react";

const List = (props) => {
  // Destructuring data and style off of props for easy access
  // mapping through our data, returning one li element for each object
  // in the data array. Inserting item.text inside the li, using item.id
  // as a unique key prop
  return (
    <ul style={props.style} className="list-group">
      {props.data.map(item => (
        <li key={item.id} className="list-group-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default List;
