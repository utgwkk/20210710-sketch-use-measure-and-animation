import { motion } from "framer-motion";
import React, { useState } from "react";

import styles from "./App.module.css";
import { Child } from "./Child";

export const App: React.VFC = () => {
  const [done, setDone] = useState(false);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <div className={styles.flex}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.container}
          onAnimationComplete={() => setDone(true)}
        >
          <h2>with tracking animation complete</h2>
          <Child animationCompleted={done} />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.container}
        >
          <h2>without tracking animation complete</h2>
          <Child />
        </motion.div>
      </div>
    </div>
  );
};
