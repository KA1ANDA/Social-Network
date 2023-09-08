import React, { useEffect, useState } from 'react';
import ProfileNav from '../NavUi/Nav';
import UserInfo from '../UserHeaderInfoUi/UserHeaderInfo';
import Main from '../MainUi/Main';
import styles from './app.module.scss'
import { useSelector } from 'react-redux';
import AboutMeEdit from '../ProfileUi/AboutMeUi/AboutMeEdit';
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosArrowBack} from 'react-icons/io'




const App = () => {

  const {editMode} = useSelector(state => state.profileSlice)


  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [colapsedMenu, setColapsedMenu] = useState(false);


  useEffect(() => {

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 768);
    };

  
    checkScreenSize();

   
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  const toggleColapsedMenu = () =>{
    setColapsedMenu(!colapsedMenu)
  }

  return (
    <div className={`${styles.app} ${editMode && styles.diableScroll}`}>
      {isLargeScreen && colapsedMenu &&
      <>
        <div className={styles.blur}> </div>
        <div className={styles.colapsedMenu}>
          <div className={styles.closeMenu} onClick={toggleColapsedMenu}><IoIosArrowBack/></div>
          <UserInfo />
          <ProfileNav />
        </div>
      </>
      
      }



      {isLargeScreen ? 
      <div className={styles.showMoreIcon} onClick={toggleColapsedMenu}> <RxHamburgerMenu/> </div>
      :
      <>
        <div className={styles.header}>
          <UserInfo />
        </div>
        <div className={styles.nav}>
          <ProfileNav />
        </div>
      </>
      }
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
