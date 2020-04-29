import React from 'react';
import LanguageContext from '../contexts/LanguageContexts';

class Button extends React.Component {
  static contextType = LanguageContext;

  // renderText = (value) => {
  //   return value === 'english' ? 'Submit' : 'Voorleggen';
  // };

  render() {
    const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen';
    const color = this.context === 'english' ? 'primary' : 'red';
    return <button className={`ui button ${color}`}>{text}</button>;
  }
}

export default Button;
