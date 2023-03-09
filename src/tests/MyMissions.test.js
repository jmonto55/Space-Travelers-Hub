import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom';

import MyMissions from '../components/Missions/MyMissions';

jest.mock('react-redux');

describe('Test suite for MyMissions component', () => {
  it('should render "No Missions yet" if no missions are joined', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: { missions: [] },
    }));

    const { getByText } = render(<MyMissions />);

    expect(getByText('No Missions yet')).toBeInTheDocument();
  });

  it('should render the joined missions', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', joined: false },
          { mission_id: 2, mission_name: 'Mission 2', joined: true },
          { mission_id: 3, mission_name: 'Mission 3', joined: true },
        ],
      },
    }));

    const { getByText } = render(<MyMissions />);

    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Mission 3')).toBeInTheDocument();
  });
});
