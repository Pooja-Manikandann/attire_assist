import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

const Header = (props) => {
const {setPage} = props;
  const redirectToHome = () => {
    setPage(1)
  }
  return (
    <div className={styles.header}>
        <img onClick={redirectToHome} src={logo} alt="logo" />
        {/* <span>ATTIRE ASSIST</span> */}
    </div>
  )
}

export default Header