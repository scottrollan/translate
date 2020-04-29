import React from 'react';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContexts';

class App extends React.Component {
  // state = {
  //   language: 'english',
  //   buttonColor: 'primary',
  // };

  // onLanguageChange = (language, buttonColor) => {
  //   this.setState({ language });
  //   this.setState({ buttonColor });
  // };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* <ColorContext.Provider value="red"> */}
          <UserCreate />
          {/* </ColorContext.Provider> */}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
