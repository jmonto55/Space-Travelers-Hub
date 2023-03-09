import MyRockets from './MyRockets';
import MyMissions from './Missions/MyMissions';

const MyProfile = () => (
  <div className="px-20 py-5 grid grid-cols-2 gap-4">
    <MyRockets />
    <MyMissions />
  </div>
);

export default MyProfile;
