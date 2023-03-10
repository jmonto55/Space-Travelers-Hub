import { useSelector } from 'react-redux';

const MyRockets = () => {
  const { rocketsList } = useSelector((store) => store.rockets);
  const reservedRockets = rocketsList.filter((rokt) => rokt.reserved);

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-3">My Rockets</h2>
      <ul className="border-solid border-t-2 border-neutral-300">
        {!reservedRockets.length ? <li className="p-5 text-lg">No Rockets yet</li>
          : reservedRockets.map((rokt) => <li className="border-solid border-2 border-t-0 border-neutral-300 p-5 text-lg" key={rokt.id}>{rokt.name}</li>)}
      </ul>
    </div>
  );
};

export default MyRockets;
