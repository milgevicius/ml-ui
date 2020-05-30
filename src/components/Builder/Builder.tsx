import React from 'react';
import styles from './Builder.module.scss';
import Designer from "../Designer/Designer";

const Builder = () => (
  <div className={styles.Builder}>
    Builder Component
      <Designer/>
  </div>
);

export default Builder;
