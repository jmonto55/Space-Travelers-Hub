import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { joinMission } from '../../redux/missions/missionsSlice';

const Mission = ({
  id, name, description, joined, index,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr className={!(index % 2) ? 'bg-gray-100' : ''}>
        <td className="p-2 border align-top">
          <p className="font-bold text-xl">
            {name}
          </p>
        </td>
        <td className="p-2 border text-sm tracking-wide">{description}</td>
        <td className="p-2 border">
          <span className={`text-white pt-0.5 pb-1 px-1.5 text-sm font-semibold rounded ${!joined ? 'bg-neutral-500' : 'bg-cyan-600'}`}>
            {!joined ? 'NOT A MEMBER' : 'Active Member'}
          </span>
        </td>
        <td className="p-2 border">
          <button
            className={`py-1 rounded w-32 border ${!joined ? 'border-neutral-500 hover:bg-neutral-200 text-black' : 'border-red-500 hover:bg-red-300 text-red-500'} `}
            type="button"
            onClick={() => dispatch(joinMission(id))}
          >
            {!joined ? 'Join Mission' : 'Leave Mission'}
          </button>
        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Mission;
