import React, { useEffect, useRef, useState } from "react";
import { JssProvider, ThemeProvider } from "react-jss";
import { Child } from "./child";
import { Parent } from "./parent";

const something = () => (
  <Parent hasHover>
    <Child>I should have a border!</Child>
  </Parent>
);

export default function App() {
  const [parent, setParent] = useState(1);
  const [count, setCount] = useState(1);

  const element = (
    <Parent hasHover>
      <Child hasHover>I should have a border!</Child>
    </Parent>
  );

  return (
    <div>
      <div>
        <strong>Steps to reproduce</strong>
        <ol style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <button onClick={() => setCount((state) => state + 1)}>
              Re-render App
            </button>
          </li>
          <li>
            <button onClick={() => setParent(2)}>Change Parent</button>
          </li>
        </ol>
      </div>

      {parent === 1 && <div id="1">Parent 1: {element}</div>}
      {parent === 2 && <div id="2">Parent 2: {element}</div>}
    </div>
  );
}
