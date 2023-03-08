import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <div className="max-w-7xl m-auto w-full">
    <nav className="flex px-20 py-5 justify-between items-center">
      <div className="flex justify-center items-center">
        <img className="w-14" src={planet} alt="space hub logo" />
        <h1 className="ml-5 text-3xl font-semibold">Space Travelers Hub</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link className="font-semibold text-lg hover:text-slate-600" to="/">Rockets</Link>
        </li>
        <li>
          <Link className="font-semibold text-lg hover:text-slate-600" to="missions">Missions</Link>
        </li>
        <li>
          <Link className="font-semibold text-lg hover:text-slate-600" to="myprofile">My Profile</Link>
        </li>
      </ul>
    </nav>
    <div className="flex justify-center px-12">
      <hr className="w-full" />
    </div>
  </div>
);

export default Navbar;
