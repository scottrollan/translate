import React from 'react';
import LanguageContext from '../contexts/LanguageContexts';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange('english', 'primary')}
          className="flag us"
        />
        <i
          onClick={() => this.context.onLanguageChange('dutch', 'red')}
          className="flag nl"
        />
      </div>
    );
  }
}

export default LanguageSelector;
