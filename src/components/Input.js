import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const { type = "text", placeholder, name, className, ...rest } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={clsx(["ui-textfield", className])}
      {...rest}
    />
  );
}
