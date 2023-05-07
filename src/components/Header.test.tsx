// TODO: 테스트 코드
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Header from './Header';
import { render } from '../test-helpers';

const context = describe;

const navigate = jest.fn();

let accessToken = '';
const setAccessToken = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}
));

jest.mock('../hooks/useAccessToken', () => () => ({
  accessToken,
  setAccessToken,
}));

describe('Header', () => {
  it('render title', () => {
    render(<Header />);

    screen.getByText(/Shop/);
  });

  context('render Categories', () => {
    it('should show all li tags on mouse hover', () => {
      render(<Header />);

      const productsCategory = screen.getByText('Products');
      fireEvent.mouseEnter(productsCategory);

      const liTags = screen.queryAllByRole('listitem');
      expect(liTags.length).toBeGreaterThan(0);
    });
  });

  context('when the current user is not logged in', () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('renders "Login" button', () => {
      render(<Header />);

      screen.getByRole('link', { name: 'Login' });
    });
  });

  context('When the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS_TOKEN';
    });

    it('renders "Logout" button', async () => {
      render(<Header />);

      const button = screen.getByRole('button', { name: 'Logout' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(setAccessToken).toBeCalledWith('');
        expect(navigate).toBeCalledWith('/');
      });
    });
  });
});
