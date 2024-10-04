// components/Avatar.js

import React from 'react';
import styles from '../styles/Avatar.module.css'

const Avatar = ({ name }) => {
  const firstLetter = name.charAt(0).toUpperCase(); // Get the first letter of the name

  return (
    <div className={styles.avatar}>
      {firstLetter}
    </div>
  );
};

export default Avatar;