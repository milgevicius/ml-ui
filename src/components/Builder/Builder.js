import React from 'react';
import PropTypes from 'prop-types';
import styles from './Builder.module.scss';
import Designer from "../Designer/Designer";

const Builder = () => (
  <div className={styles.Builder}>
    Builder Component
      <Designer/>
  </div>
);

Builder.propTypes = {};

Builder.defaultProps = {};

export default Builder;
