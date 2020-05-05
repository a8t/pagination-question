import React from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Write a React pagination component.
 *
 *
 * SCENARIO
 * We will receive data that incldues an array of items and a count, like this:
 *
 * const data = {
 *    count: 300,
 *    items: ['one', 'two', 'three', ...etc...],
 * }
 *
 * The data in `items` doesn't matter for this exercise, because what we are building is a pagination component.
 *
 *
 * SOME REQUIREMENTS
 * - Always show the first 2 and last 2 pages
 * - Show the nearest 2 pages to the current selected page
 * - If there is a gap between page numbers,
 * - (i.e. if 3 and 4 should not be displayed, there would be a gap between 2 and 5), show an ellipsis to represent the gap
 *
 * A HINT
 * The component will take four props:
 * - `count` is the total number of records shown
 * - `numPerPage` is the number shown on any page
 * - `currentPage` is the currently selected page
 * - `selectPage` is a function to set the page
 *
 *  */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
