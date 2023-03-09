import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureMockStore from 'redux-mock-store';

import Mission from "../components/Missions/Mission";
import { joinMission } from "../redux/missions/missionsSlice";

const mockStore = configureMockStore();

describe('Test suite for Mission component', () => {
    it('Dispaches joinMissions action when Join Mission button is clicked', () => {
        const store = mockStore({
            mission: [
                {
                    id: 'ASD-123',
                    name: 'Mission 1',
                    description: 'This mission was the first to reach the moon',
                    joined: true,
                }
            ]
        });
        const { getByText } = render(
            <Provider store={store}>
                <table>
                    <thead>
                        <tr className="h-10">
                            <th className="border text-left p-2 text-xl">Mission</th>
                            <th className="border text-left p-2 text-xl">Description</th>
                            <th className="border text-left p-2 text-xl w-36">Status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Mission id="ASD-123" name="Mission 1" description="This mission was the first to reach the moon" joined={true} index={0} />
                    </tbody>
                </table>
            </Provider>
        )
        const joinMissionButton = getByText('Leave Mission');
        fireEvent.click(joinMissionButton);

        const expectedAction = joinMission("ASD-123");
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    })
})