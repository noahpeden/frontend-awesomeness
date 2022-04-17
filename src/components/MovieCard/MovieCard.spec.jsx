import { render, screen } from '@testing-library/react';
import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './MovieCard';

jest.mock('../MovieDialog');

describe('<MovieCard />', () => {
  const setup = () => {
    const props = {
      poster: 'mock poster',
      title: 'Mock Title',
      type: 'type of mock',
      year: '2022',
      imdbID: 'mockID',
    };

    const mockContext = { setMovieData: jest.fn(), setDialogOpen: jest.fn() };
    const utils = render(
      <MovieContext.Provider value={mockContext}>
        <MovieCard {...props} />
      </MovieContext.Provider>
    );

    return {
      ...utils,
      mockContext,
      MovieCardComponent: () => screen.getByTestId('MovieCard-test'),
    };
  };

  describe('render', () => {
    it('renders the movie details correctly', () => {
      const { MovieCardComponent } = setup();

      expect(MovieCardComponent()).toBeInTheDocument();
      expect(screen.getByText('Mock Title')).toBeInTheDocument();
      expect(screen.getByText('Year: 2022')).toBeInTheDocument();
    });
  });
});
