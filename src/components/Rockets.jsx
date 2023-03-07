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
    <section className="rockets_section">
      <div className="rockets_wrapper">
        {rocketsList.map((rokt) => (
          <Rocket
            key={rokt.id}
            id={rokt.id}
            name={rokt.name}
            description={rokt.description}
            img={rokt.flickr_images[0]}
            reserved={rokt.reserved}
          />
        ))}
      </div>
    </section>
  );
};

export default Rockets;
