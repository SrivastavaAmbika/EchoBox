import React from 'react';
import styles from './Home.module.css';
import {Link, useHistory} from 'react-router-dom';
import Card from '../../components/Shared/Card/Card'
import Button from '../../components/Shared/Button/Button';
const Home = () => {
    const signLink={
        color:"#0077ff",
        fontWeight:"bold",
        textDecoration:"none",
        marginLeft:"10px",
    };
    const history = useHistory();
    const startRegister = () => {
        history.push('/register');
        console.log("button clicked");
    }
  return (
   <>
   <div className={styles.cardWrapper}>
   <Card title="Welcome to EchoBox !" icon="logo">
   <p className={styles.text}>We’re working hard to get EcchoBox ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
    </p>
    <div>
<Button onClick={startRegister} text="Get Your Username"></Button>
</div>
<div className={styles.signinWrapper}>
    <span className={styles.hasInvite}>Have an invite text?</span>
    <Link style={signLink} to='/login'>Sign in</Link>
</div> 
    </Card>
  
   </div>

   </>
   )
}

export default Home