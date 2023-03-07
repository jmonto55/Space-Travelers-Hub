import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const { rocketsList } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <section className="rockets_wrapper">
      <div>
        {rocketsList.map((rokt) => <Rocket key={rokt.id} name={rokt.name} />)}
      </div>
    </section>
  );
};

export default Rockets;
