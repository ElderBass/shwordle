import React from 'react';
import styles from './LauraModal.module.css';
import LauraModalHeader from './LauraModalHeader';

function LauraModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.lauraModal}>
                <LauraModalHeader />
                <h4 style={{ textAlign: 'center' }}>
                    She really is,
                    <br />
                    <span style={{ color: 'rgb(87, 179, 255)' }}>just ask this guy.</span>
                </h4>
                <a
                    className={styles.turtleLink}
                    href="https://www.youtube.com/watch?v=9KnEDSYksZI"
                    rel='noreferrer'
                    target='_blank'
                >
                    <img
                        className={styles.image}
                        src="https://www.ecowatch.com/wp-content/uploads/2021/10/646441070-origin.jpg"
                        alt="Laura Trebe Programs Hard"
                    />
                </a>
            </div>
        </div>
    );
}

export default LauraModal;
