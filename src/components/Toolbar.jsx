import React from 'react';
import EnterButton from './EnterButton';
import DeleteButton from './DeleteButton';
import styles from './Toolbar.module.css'

function Toolbar({ answerWord, wordPool }) {
  return (
    <div className={styles.toolbar}>
      <EnterButton answerWord={answerWord} wordPool={wordPool} />
      <DeleteButton />
    </div>
  );
}

export default Toolbar;