import React, { useState } from "react";
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
        <p>
          This is a slightly contrived example. Technically, in this case we
          don't need to use dynamic classes. In my real use-case where this bug
          exists we do need to use dynamic classes.
        </p>
        <ol style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            First you need to &nbsp;
            <button onClick={() => setCount((state) => state + 1)}>
              re-render
            </button>
            &nbsp; the root node.
          </li>
          <li>
            Next, &nbsp;
            <button
              onClick={() => setParent((_parent) => (_parent === 1 ? 2 : 1))}
            >
              remount
            </button>
            &nbsp; the parent component.
          </li>
          <li>Observe the border is missing from the component.</li>
        </ol>
      </div>

      {parent === 1 && <div id="1">Parent 1: {element}</div>}
      {parent === 2 && <div id="2">Parent 2: {element}</div>}
    </div>
  );
}
