import React from "react";

export default function Input(props) {
  const type = props.type || "text";
  return (
    <input
      type={type}
      placeholder={props.placeholder}
      name={props.name}
      className="ui-textfield"
    />
  );
}
