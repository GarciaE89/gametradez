import React from 'react';
import Auth from '../../utils/auth';

function Header(props) {
  // const tabs = ['About', 'Tradez', 'Users', 'Login', 'Register'];
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  if (!Auth.loggedIn() ) {
    var tabs = ['About', 'Tradez', 'Post', 'Login', 'Register'];
  } else {
    var tabs = ['About', 'Tradez', 'Post'];
  }
  
  return (
    <ul className="flex-row" id="header">
      <h2>
        <a id="pagename" data-testid="link" href="/">
          Gametradez
        </a>
      </h2>
      <div id="navi">
      {tabs.map(tab => (
        <li className="mx-1" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
        {Auth.loggedIn()
          ? <a href="/" onClick={logout} id="logoutlink">Logout</a>
          : <a></a>    
        }
      </div>
    </ul>
  );
}

export default Header;