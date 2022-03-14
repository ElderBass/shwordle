import React from 'react';
import styles from './LauraModal.module.css';

function LauraModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.lauraModal}>
                <h3>Laura Trebe is a <span style={{ color: 'rgb(10, 165, 10)' }}>PROGRAMMER</span></h3>
                <h4 style={{ textAlign: 'center' }}>
                    She really is,<br/>
                    <span style={{ color: 'rgb(87, 179, 255)' }}>just ask this guy.</span>

                </h4>
                
                <img className={styles.image} src='https://www.ecowatch.com/wp-content/uploads/2021/10/646441070-origin.jpg' alt='Laura Trebe Programs Hard' />
            </div>
        </div>
    );
}

export default LauraModal;