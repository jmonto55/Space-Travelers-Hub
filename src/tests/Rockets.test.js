import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Rockets component', () => {
  it('Should render a Snapshot of the Rockets component', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });

  test('Should test if the id Rockets is inside the Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.getByTestId('Rockets')).toBeInTheDocument();
  });
});
