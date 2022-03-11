import React from 'react'
import {Link} from "react-router-dom";
import styles from './Navigation/Navigation.module.css';

const Navigation = () => {
    const brandStyle={
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItems:'center',
    }
    const LogoText={
        marginLeft:'10px'
    }
  return (
    <>
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
            
<img src='/image/logo.png' alt='logo'/>
<span style={LogoText}>EchoBox</span>
            </Link>
        </nav>
    </>
  )
}

export default Navigation