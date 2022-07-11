import React from 'react';

function ActionButton({ onClick, styles, text }) {
  return (
    <div className={styles} onClick={onClick}>
      {text}
    </div>
  );
}

export default ActionButton;