import { fireEvent, render, screen } from '@testing-library/react';
import { MovieContext } from '../../contexts/MovieContext';
import MovieDialog from './MovieDialog';

describe('<MovieDialog />', () => {
  const setup = () => {
    const mockContext = {
      dialogOpen: true,
      setDialogOpen: jest.fn(),
      movieData: {
        Title: 'mock title',
        Year: '2022',
        Rated: 'mock rating',
        Released: '1590',
        Runtime: '1 hour',
        Genre: 'action',
        Director: 'noah peden',
        Writer: 'noah peden',
        Actors: 'so many',
        Plot: 'ha!',
        Language: 'English',
        Country: 'Canada',
        Poster: 'mock poster url',
      },
    };
    const utils = render(
      <MovieContext.Provider value={mockContext}>
        <MovieDialog />
      </MovieContext.Provider>
    );

    return {
      ...utils,
      mockContext,
      MovieDialogComponent: () => screen.getByTestId('MovieDialog-test'),
      CloseDialogBtn: () => screen.getByTestId('close-dialog-test'),
    };
  };

  describe('render', () => {
    it('renders the movie details correctly', () => {
      const { MovieDialogComponent, mockContext } = setup();
      const movieDataKeys = Object.keys(mockContext.movieData);
      const movieDataValues = Object.values(mockContext.movieData);

      expect(MovieDialogComponent()).toBeInTheDocument();
      expect(screen.getByText('mock title')).toBeInTheDocument();
      movieDataValues.forEach((val, i) => {
        if (val === 'mock poster url' || val === 'mock title') {
          return;
        }
        expect(screen.getByText(`${movieDataKeys[i]}: ${val}`)).toBeInTheDocument();
      });
    });
  });

  describe('actions', () => {
    it('closes the dialog when clicked', () => {
      const { CloseDialogBtn, mockContext } = setup();

      fireEvent.click(CloseDialogBtn());
      expect(mockContext.setDialogOpen).toHaveBeenNthCalledWith(1, false);
    });
  });
});
