import React from 'react';

import styles from './Footer.module.css'

import { ReactComponent as Dogs } from '../assets/dogs-footer.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservador</p>
    </footer>
  );
}

export default Footer;
