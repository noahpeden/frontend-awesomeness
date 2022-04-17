import { render, screen } from '@testing-library/react';
import { MovieContext } from '../../contexts/MovieContext';
import SideNav from './SideNav';

// jest.mock('@mui/material', () => ({
//   useMediaQuery: () => false,
// }));

describe('<SideNav />', () => {
  const setup = () => {
    const mockContext = {
      mobileOpen: false,
      setMobileOpen: jest.fn(),
    };
    const utils = render(
      <MovieContext.Provider value={mockContext}>
        <SideNav />
      </MovieContext.Provider>
    );

    return {
      ...utils,
      mockContext,
      DrawerComponent: () => screen.getByTestId('DrawerComponent-test'),
      CloseDrawerBtn: () => screen.queryByTestId('close-drawer-test'),
    };
  };

  describe('render', () => {
    it('renders the Drawer correctly without the button when !isMobile', () => {
      const { DrawerComponent, CloseDrawerBtn } = setup();

      expect(DrawerComponent()).toBeInTheDocument();
      expect(CloseDrawerBtn()).not.toBeInTheDocument();
      ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6', 'Menu 7'].forEach((menuItem) => {
        // getting the first since RTL can't tell the difference with both in the dom
        expect(screen.getAllByText(menuItem)[0]).toBeInTheDocument();
      });
    });
  });

  describe('actions', () => {
    // @TODO figure out how to mock useMediaQuery to return true for less than 600px
    xit('closes the drawer when clicked', () => {
      const { CloseDrawerBtn } = setup();
      // Change the viewport to 500px.
      global.innerWidth = 500;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      expect(CloseDrawerBtn()).toBeInTheDocument();
    });
  });
});
