import React from 'react';
import { useSelector } from 'react-redux';

import Mission from './Mission';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <>
      <section data-testid="Missions" className="container mx-auto py-5">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="h-10">
              <th className="border text-left p-2 text-xl">Mission</th>
              <th className="border text-left p-2 text-xl">Description</th>
              <th className="border text-left p-2 text-xl w-36">Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission, index) => (
              <Mission
                key={mission.mission_id}
                id={mission.mission_id}
                name={mission.mission_name}
                description={mission.description}
                joined={mission.joined}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Missions;
