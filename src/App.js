import React from 'react';
import './App.css';
import EmailSearch from './containers/EmailSearch';
import Header from './components/Header';
import PreSurvey from './components/PreSurvey';

function App() {
  return (
    <div className="App">
      <Header />
      <EmailSearch />
      {/* <PreSurvey /> */}
    </div>
  );
}

export default App;
