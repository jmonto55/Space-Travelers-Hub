import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  id, name, description, img, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center h-44" id={id}>
      <img className="w-60 h-full" src={img} alt={name} />
      <div className="flex flex-col justify-between px-5 h-full">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p>
          {reserved && <span className="p-0.5 mr-2 rounded-md text-white bg-teal-500">Reserved</span>}
          {description}
        </p>
        {!reserved && (
        <button
          className="w-32 p-2 mr-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
          type="button"
          onClick={() => {
            dispatch(reserveRocket(id));
          }}
        >
          Reserve Rocket
        </button>
        )}
        {reserved && (
        <button
          className="w-40 p-2 mr-2 rounded-md text-neutral-500 border-solid border-2 border-neutral-500 hover:bg-neutral-200"
          type="button"
          onClick={() => {
            dispatch(reserveRocket(id));
          }}
        >
          Cancel Reservation
        </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
