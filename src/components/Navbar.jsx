import { Link, useLocation } from 'react-router-dom';
import rocket from '../assets/rocket.svg';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="max-w-screen-2xl m-auto w-full">
      <nav className="container  mx-auto flex py-5 justify-between items-center">
        <div className="flex justify-center items-center">
          <img className="w-14" src={rocket} alt="space hub logo" />
          <h1 className="ml-5 text-3xl font-semibold">Space Travelers Hub</h1>
        </div>
        <ul className="flex gap-10">
          <li>
            <Link className={`font-semibold text-lg hover:text-slate-600 text-blue-500 ${location.pathname === '/' ? 'underline' : ''}`} to="/">Rockets</Link>
          </li>
          <li>
            <Link className={`font-semibold text-lg hover:text-slate-600 text-blue-500 ${location.pathname === '/missions' ? 'underline' : ''}`} to="missions">Missions</Link>
          </li>
          <li className="border-r-2 border-black h-4 mt-2" />
          <li>
            <Link className={`font-semibold text-lg hover:text-slate-600 text-blue-500 ${location.pathname === '/myprofile' ? 'underline' : ''}`} to="myprofile">My Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center px-12">
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
