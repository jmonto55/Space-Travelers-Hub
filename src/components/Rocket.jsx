import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, img, reserved,
}) => {
  console.log(reserved);
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
        >
          Reserve Rocket
        </button>
        )}
        {reserved && (
        <button
          className="cancel_btn"
          type="button"
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
