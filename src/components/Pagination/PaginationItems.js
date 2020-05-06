import React from "react";

export function PaginationNumber({ currentPage, selectPage, value }) {
  return (
    <div
      className={`pagination--number ${
        currentPage === value
          ? "pagination--number__selected"
          : "pagination--number__unselected"
      }`}
      onClick={() => selectPage(value)}
    >
      {value}
    </div>
  );
}

export function PaginationEllipsis() {
  return <div className={`pagination--ellipsis`}>...</div>;
}
