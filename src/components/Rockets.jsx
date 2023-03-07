import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const { rocketsList } = useSelector((store) => store.rockets);

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
