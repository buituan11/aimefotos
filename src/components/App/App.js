import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
    	<Header/>
    	<Main/>
    	<Contact/>
    	<Footer/>
    </div>
  );
}

export default App;
