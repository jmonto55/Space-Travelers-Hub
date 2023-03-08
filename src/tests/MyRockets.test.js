import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyRockets from '../components/MyRockets';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the MyRockets component', () => {
  it('Should render a Snapshot of the MyRockets component', () => {
    const myrockets = render(
      <Provider store={store}>
        <MyRockets />
      </Provider>,
    );
    expect(myrockets).toMatchSnapshot();
  });

  test('Should test if the text "My Rockets" is inside the MyRockets component', () => {
    render(
      <Provider store={store}>
        <MyRockets />
      </Provider>,
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
