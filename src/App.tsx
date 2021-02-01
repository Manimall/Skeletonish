import React from 'react';
import logo from './logo.svg';

import Skeleton from './Skeleton';

import styles from './App.module.css';

const sizes = [
  {
    w: '100%',
    h: 40,
  },
  {
    w: 284,
    h: 26,
  },
];

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Skeleton skeletonSizes={sizes} className={styles.abs} wrapperClassName={styles.test} wrapperTag='ul' animation='wave' />

        <Skeleton width={50} height={30} />
        <Skeleton width={50} height={20} circle/>
      </header>
    </div>
  );
}

export default App;
