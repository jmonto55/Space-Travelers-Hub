import rocket from '../assets/rocket.svg';

const Navbar = () => (
  <div className="max-w-screen-2xl m-auto w-full">
    <nav className="flex px-20 py-5 justify-between items-center">
      <div className="flex justify-center items-center">
        <img className="w-14" src={rocket} alt="space hub logo" />
        <h1 className="ml-5 text-3xl font-semibold">Space Travelers Hub</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          Rockets
        </li>
        <li>
          Missions
        </li>
        <li>
          My Profile
        </li>
      </ul>
    </nav>
    <div className="flex justify-center px-12">
      <hr className="w-full" />
    </div>
  </div>
);

export default Navbar;
