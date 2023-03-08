import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const { rocketsList } = useSelector((store) => store.rockets);

  return (
    <section className="flex justify-center items-center px-20 py-5 max-w-7xl m-auto">
      <div className="flex flex-col gap-10">
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
