import { fireEvent, render, screen } from '@testing-library/react';
import { MovieContext } from '../../contexts/MovieContext';
import Header from './Header';

describe('<Header />', () => {
  const setup = () => {
    const mockContext = { mobileOpen: false, setMobileOpen: jest.fn() };
    const utils = render(
      <MovieContext.Provider value={mockContext}>
        <Header />
      </MovieContext.Provider>
    );

    return {
      ...utils,
      mockContext,
      HeaderComponent: () => screen.getByTestId('header-test'),
      DrawerOpenButton: () => screen.getByTestId('drawer-open-button-test'),
    };
  };

  describe('render', () => {
    it('renders the Heaader component correctly', () => {
      const { HeaderComponent } = setup();

      expect(HeaderComponent()).toBeInTheDocument();
      expect(screen.getByText('Movie Search')).toBeInTheDocument();
    });
  });

  describe('actions', () => {
    it('calls setMobileOpen when the menu is clicked', () => {
      const { DrawerOpenButton, mockContext } = setup();

      fireEvent.click(DrawerOpenButton());
      expect(mockContext.setMobileOpen).toHaveBeenCalledWith(true);
    });
  });
});
