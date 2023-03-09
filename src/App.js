import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRockets } from './redux/rockets/rocketsSlice';
import Navbar from './components/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div id="app" className="App flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default App;
