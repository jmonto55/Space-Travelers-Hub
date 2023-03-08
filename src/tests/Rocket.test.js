import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Rocket component', () => {
  it('Should render a Snapshot of the Rocket component', () => {
    const rocket = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });

  test('Should test if the text "Reserve Rocket" is inside the Rocket component', () => {
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
});
