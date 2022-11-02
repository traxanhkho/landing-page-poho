import React from "react";

function ListTitle(props) {
  return (
    <ul className="list-title">
      {props.list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default ListTitle;
