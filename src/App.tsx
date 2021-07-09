import { motion } from "framer-motion";
import React, { useState } from "react";

import styles from "./App.module.css";
import { Child } from "./Child";

export const App: React.VFC = () => {
  const [done, setDone] = useState(false);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className={styles.container}
        onAnimationComplete={() => setDone(true)}
      >
        <Child animationCompleted={done} />
      </motion.div>
    </div>
  );
};
