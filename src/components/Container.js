import React from "react";
import clsx from "clsx";

export default function Container(props) {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx(["ui-container", className])} {...rest}>
      {children}
    </div>
  );
}
