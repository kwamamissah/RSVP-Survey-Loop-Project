import React from 'react';
import './App.css';
import EmailSearch from './containers/EmailSearch';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <EmailSearch />
    </div>
  );
}

export default App;
