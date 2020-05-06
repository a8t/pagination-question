import React, { useState } from "react";
import "./App.css";
import Pagination from "./components";

/**
 * Write a React pagination component.
 *
 *
 * SCENARIO
 * We will receive data that incldues an array of items and a count, like this:
 *
 * const data = {
 *    itemCount: 300,
 *    items: ['one', 'two', 'three', ...etc...],
 * }
 *
 * But, the data in `items` doesn't matter for this exercise,
 * because what we are building is a pagination component, rather than
 *
 *
 * SOME DESIGN REQUIREMENTS
 * - Always show the first 2 and last 2 pages
 * - Show the nearest 2 pages to the current selected page
 * - If there is a gap between page numbers,
 * - (i.e. if 3 and 4 should not be displayed, there would be a gap between 2 and 5), show an ellipsis to represent the gap
 *
 * A HINT
 * The component will take four props:
 * - `itemCount` is the total number of items shown (i.e. data.itemCount)
 * - `itemsPerPage` is the number of items shown on any page
 * - `currentPage` is the currently selected page
 * - `selectPage` is a function to set the page
 *
 *  */

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <Pagination
          itemCount={400}
          itemsPerPage={10}
          currentPage={page}
          selectPage={setPage}
        />
      </header>
    </div>
  );
}

export default App;
