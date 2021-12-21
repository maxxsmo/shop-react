import React from "react";
import clsx from "clsx";

export default function Link(props) {
  const { href, className, disabled, children, ...rest } = props;
  return (
    <a href={href} className={clsx(["ui-link", className])} {...rest}>
      {children}
    </a>
  );
}
