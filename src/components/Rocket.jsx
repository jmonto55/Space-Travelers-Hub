import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, img,
}) => (
  <card key={id}>
    <img className="rocket_image" src={img} alt={name} />
    <div className="info_wrapper">
      <h2 className="rocket_title">{name}</h2>
      <p className="rocket_description">{description}</p>
    </div>
  </card>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
