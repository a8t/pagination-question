import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";
import _ from "lodash";
import { PaginationEllipsis, PaginationNumber } from "./PaginationItems";

// The amount to show at the beginning and end
const EDGE_SIZE = 2;

// The amount to show around the currently selected page
const CURRENT_PAGE_RADIUS = 2;

const ELLIPSIS = "...";

export default function Pagination({
  itemCount,
  itemsPerPage,
  currentPage,
  selectPage,
  edgeSize = EDGE_SIZE,
  currentPageRadius = CURRENT_PAGE_RADIUS,
}) {
  // The total number of pages is the total number of items divided
  const totalPageCount = Math.ceil(itemCount / itemsPerPage);

  const paginationNumbers = getPaginationNumbersToDisplay(
    currentPage,
    totalPageCount,
    edgeSize,
    currentPageRadius
  );

  const valuesToDisplay = insertEllipses(paginationNumbers);

  return (
    <div className={"pagination"}>
      {currentPage > 1 && (
        <div onClick={() => selectPage(currentPage - 1)}>&#60;</div>
      )}
      {valuesToDisplay.map((value) =>
        value === ELLIPSIS ? (
          <PaginationEllipsis />
        ) : (
          <PaginationNumber
            currentPage={currentPage}
            selectPage={selectPage}
            value={value}
            key={value}
          />
        )
      )}
      {currentPage < totalPageCount && (
        <div onClick={() => selectPage(currentPage + 1)}>&gt;</div>
      )}
    </div>
  );
}

Pagination.propTypes = {
  // the total number of items to be paginated
  itemCount: PropTypes.number,
  // the number of items per page
  itemsPerPage: PropTypes.number,
  // the currently selected page
  currentPage: PropTypes.number,
  // a function that sets the currentPage state
  selectPage: PropTypes.func,
  // how many values show on the left and right edges
  edgeSize: PropTypes.number,
  // how many values show on either side of the current page
  currentPageRadius: PropTypes.number,
};

const getPaginationNumbersToDisplay = _.memoize(
  (currentPage, totalPageCount, edgeSize, currentPageRadius) => {
    const numbers = [
      // Left edge
      ..._.range(1, edgeSize + 1),

      // Left side around the current page; current page; right side around current page
      ..._.range(currentPage - currentPageRadius, currentPage),
      currentPage,
      ..._.range(currentPage + 1, currentPage + currentPageRadius + 1),

      // Right edge
      ..._.range(totalPageCount - edgeSize + 1, totalPageCount + 1),
    ];

    const numbersInRange = numbers.filter(
      // filter values outside the range
      (num) => num > 0 && num <= totalPageCount
    );

    return [...new Set(numbersInRange)];
  }
);

// Insert ellipses into an array of numbers by checking if there's a gap between items
const insertEllipses = _.memoize((arrOfNum) => {
  return arrOfNum.flatmap((number, index, initialArray) => {
    // don't put an ellipse before 1
    if (index === 0) {
      return 1;
    }

    // if the current number is bigger than the value at the previous index + 1,
    // in other words, if there's a gap
    // insert an array with an ellipsis before the current number
    // (and flatten the final array later)
    if (number > initialArray[index - 1] + 1) {
      return [ELLIPSIS, number];
    }
    return number;
  });
});
