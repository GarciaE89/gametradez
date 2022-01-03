import React, { useState } from 'react';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Tradez from '../../pages/Tradez';
import Users from '../../pages/Users';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

function Main() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Tradez':
        return <Tradez />;
      case 'Users':
        return <Users />;
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to Header */}
      <div class="hoverWrapper">
      <div class="arrow-container">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>  
      </div>
        <div id="hoverShow1">
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
      {/* Call the renderPage function passing in the currentPage */}
      <div id="mainWindow">{renderPage(currentPage)}</div>
    </div>
  );
}

export default Main;
