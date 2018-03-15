import React from 'react';
import './Header.css';

const Header = () => (
  <header className="Header">
    <h1>Wiki Search</h1>
  </header>
)

/* Header extends React.Component {
  shouldComponenteUpdate() {
    return false;
  }
  render() {
    return <header className="Header">
      <h1>Wiki Search</h1>
    </header>
  }
} */

export default Header;