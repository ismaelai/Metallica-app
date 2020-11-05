import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo_silver.png';

/* So if you had images in the public folder like: /public/articleImages/article2Image.png,
 you could use the url style attribute:
const imageName = 'logo_silver.png';
<div style={{ backgroundImage: `url('/articleImages/${imageName}')` }}>
  ...
</div>
<img src={`/articleImages/${imageName}`} alt="logo" className="logo" />
 */

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>
          <img src={logo} alt="logo" className="logo" />
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/collection" className="links">
              COLLECTION
            </Link>
          </li>
          <li>
            <Link to="/playlist" className="links">
              PLAYLIST
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);