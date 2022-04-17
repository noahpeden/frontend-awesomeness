import { render, screen } from '@testing-library/react';
import Home from './Home';
import useMovieApi from '../../hooks/useMovieApi';

jest.mock('../../hooks/useMovieApi');
jest.mock('../../components/MovieCard', () => () => <div>MovieCard</div>);
jest.mock('../../components/SideNav', () => () => <div>SideNav</div>);

describe('<Home />', () => {
  const setup = () => {
    const utils = render(<Home />);

    return {
      ...utils,
      HomeComponent: () => screen.queryByTestId('Home-test'),
      LoadingComponent: () => screen.getByTestId('home-loading-test'),
    };
  };

  describe('render', () => {
    it('shows a loading icon when fetching', () => {
      useMovieApi.mockReturnValue({ loading: true, error: false, data: [], fetchData: jest.fn() });
      const { HomeComponent, LoadingComponent } = setup();

      expect(HomeComponent()).not.toBeInTheDocument();
      expect(LoadingComponent()).toBeInTheDocument();
    });

    it('shows an error when the movie api returns an error', () => {
      useMovieApi.mockReturnValue({
        loading: false,
        error: 'error!',
        data: undefined,
        fetchData: jest.fn(),
      });
      setup();

      expect(screen.getByText('there has been an error: error!')).toBeInTheDocument();
    });

    it('shows the movie cards when there is data', () => {
      useMovieApi.mockReturnValue({
        loading: false,
        error: false,
        data: { Search: [{ Title: 'mock title 1' }, { Title: 'mock title 2' }] },
        fetchData: jest.fn(),
      });
      setup();

      expect(screen.getAllByText('MovieCard')).toHaveLength(2);
    });
  });
});
