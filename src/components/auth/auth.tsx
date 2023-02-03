import React, { FC, useState } from 'react';
import styles from './auth.module.css';
// import FacebookLogin from 'react-facebook-login';

interface AuthProps {
  children: React.ReactElement[]
}

const Auth: FC<AuthProps> = (props) => {
  const state: any = useState({
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
  });
  
  const componentClicked = () => {
    console.log('clicked');
  }
  
  const responseFacebook = (response: any) => {
    console.log(response);
  }  
  
  return (
    <div className={styles.base}>
      {/* <FacebookLogin
        appId=""
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}
      {props.children}
    </div>
  );
}

export default Auth;
