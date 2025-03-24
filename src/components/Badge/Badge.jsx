import React from 'react';
import styles from './badge.module.css';

export default function Badge({ text, type }) {
  return <span className={`${styles.badge} ${styles[type]}`}>{text}</span>;
}
