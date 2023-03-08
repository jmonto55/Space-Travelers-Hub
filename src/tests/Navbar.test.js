import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Navbar from './MockNavbar';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Navbar component', () => {
  it('Should render a Snapshot of the Navbar component', () => {
    const navbar = render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Should test if the texts "Rockets, Missions & Space Travelers Hub" are inside the Navbar component', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
    expect(screen.getByText('Rockets' && 'Missions' && 'Space Travelers Hub')).toBeInTheDocument();
  });
});
