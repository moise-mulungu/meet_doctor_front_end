import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Reserve from '../components/Pages/reserve/Reserve'


it('Check if Reserve page renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.clearAllMocks();
});