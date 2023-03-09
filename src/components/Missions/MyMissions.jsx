import { useSelector } from 'react-redux';

const MyMissions = () => {
  const { missions } = useSelector((store) => store.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-3">My Missions</h2>
      <ul className="border-solid border-t-2 border-neutral-300">
        {!joinedMissions.length ? <li className="p-5 text-lg">No Missions yet</li>
          : joinedMissions.map((mission) => <li className="border-solid border-2 border-t-0 border-neutral-300 p-5 text-lg" key={mission.mission_id}>{mission.mission_name}</li>)}
      </ul>
    </div>
  );
};

export default MyMissions;
