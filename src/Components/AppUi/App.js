import React from 'react';
import ProfileNav from '../NavUi/Nav';
import UserInfo from '../UserHeaderInfoUi/UserHeaderInfo';
import Main from '../MainUi/Main';
import styles from './app.module.scss'
import { useSelector } from 'react-redux';
import AboutMeEdit from '../ProfileUi/AboutMeUi/AboutMeEdit';



const App = () => {

  const {editMode} = useSelector(state => state.profileSlice)


  return (
    <div className={`${styles.app} ${editMode && styles.diableScroll}`}>
      <div className={styles.header}>
        <UserInfo />
      </div>
      <div className={styles.nav}>
        <ProfileNav />
      </div>
      <div className={styles.main}>
        <Main />
      </div>

      {editMode && 
      <div className={styles.editMode}>
        <div className={styles.wrapper}>
          <AboutMeEdit />
        </div> 
      </div>  
      }
    </div>
  );
}

export default App;
