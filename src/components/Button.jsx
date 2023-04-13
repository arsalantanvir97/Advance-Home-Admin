import React from "react";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

export default function Button({
  loading,
  children,
  onClick,
  className,
  style,
}) {
  if (loading)
    return (
      <button
        type="button"
        className={className}
        style={{ ...style, cursor: "wait" }}
      >
        <div className="ft-refresh-cw icon-spin font-medium-2"></div>
      </button>
    );

  return (
    <button type="button" className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
