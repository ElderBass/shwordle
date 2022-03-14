import React from 'react';

function ModalCloseIcon({ className, onClick }) {
    return (
        <button onClick={onClick} className={className}>
            X
        </button>
    );
}

export default ModalCloseIcon;