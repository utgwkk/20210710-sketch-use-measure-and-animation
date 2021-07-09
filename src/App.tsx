import React from "react";

import { Child } from "./Child";
import styles from "./App.module.css";

export const App: React.VFC = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <div className={styles.container}>
        <Child />
      </div>
    </div>
  );
};
