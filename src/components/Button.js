import React from "react";
import clsx from "clsx";
export default function Button(props) {
  const { children, type, disabled, className, ...rest } = props;
  return (
    <button
      className={clsx(["ui-button", className])}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
