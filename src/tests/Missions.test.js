import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom'

import Missions from '../components/Missions/Missions';
import store from '../redux/store';

describe('Test suite for Missions Component', () => {
    it('Render the table header', () => {
        render(
            <Provider store={store}>
                <Missions />
            </Provider>
        )
        expect(screen.getByText(/Mission/i)).toBeInTheDocument();
        expect(screen.getByText(/Description/i)).toBeInTheDocument();
        expect(screen.getByText(/Status/i)).toBeInTheDocument();
    });
})