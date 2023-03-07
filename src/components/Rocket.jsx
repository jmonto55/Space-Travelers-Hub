import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  id, name, description, img, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div id={id}>
      <img className="rocket_image" src={img} alt={name} />
      <div className="info_wrapper">
        <h2 className="rocket_title">{name}</h2>
        <p className="rocket_description">
          {reserved && <span className="reserved_flag">Reserved</span>}
          {description}
        </p>
        {!reserved && (
        <button
          className="reserve_btn"
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
          className="cancel_btn"
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
