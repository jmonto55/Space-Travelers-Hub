import { useSelector } from 'react-redux';

const MyRockets = () => {
  const { rocketsList } = useSelector((store) => store.rockets);
  const reservedRockets = rocketsList.filter((rokt) => rokt.reserved === true);

  return (
    <div>
      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rokt) => <li key={rokt.id}>{rokt.name}</li>)}
      </ul>
    </div>
  );
};

export default MyRockets;
