import React from 'react';
import ProfileNav from '../NavUi/Nav';
import UserInfo from '../UserHeaderInfoUi/UserHeaderInfo';
import Main from '../MainUi/Main';


const App = () => {

  return (
    <div>
      <UserInfo />
      <ProfileNav />
      <Main />
    </div>
  );
}

export default App;
