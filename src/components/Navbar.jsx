import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <img src={planet} alt="space hub logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="missions">Missions</Link>
        </li>
        <li>
          <Link to="myprofile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
