import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './views/Home';
export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
