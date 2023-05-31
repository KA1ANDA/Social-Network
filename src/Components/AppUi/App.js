import React from 'react';
import ProfileNav from '../NavUi/Nav';
import UserInfo from '../UserHeaderInfoUi/UserHeaderInfo';
import Main from '../MainUi/Main';
import styles from './app.module.scss'



const App = () => {

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <UserInfo />
      </div>
      <div className={styles.nav}>
        <ProfileNav />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
    </div>
  );
}

export default App;
