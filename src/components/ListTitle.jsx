import React from "react";

function ListTitle(props) {
  return (
    <ul className="list-title">
      {props.list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default ListTitle;
