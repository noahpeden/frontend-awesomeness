import useMovieApi from './useMovieApi';
import { render, renderHook, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
jest.mock('axios');

describe('fetchUsers', () => {
  // @TODO: shouldn't keep renderHook up here, need to refactor to move into it block: https://kentcdodds.com/blog/how-to-test-custom-react-hooks
  const { result } = renderHook(() => useMovieApi());
  describe('when API call is successful', () => {
    it('should return users list', async () => {
      const movies = [
        {
          Search: [
            {
              Title: 'mock title 1',
              Year: '1991',
            },
            { Title: 'mock title 2', Year: 2022 },
          ],
        },
      ];
      axios.get.mockResolvedValueOnce(movies);

      let response;
      act(async () => {
        response = await result.current.fetchData({ param: 'i', search: 'super' });
      });

      expect(axios.get).toHaveBeenCalledWith(
        `http://www.omdbapi.com/?i=super&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      expect(response).toEqual(movies.Search);
    });
  });

  describe('when API call fails', () => {
    it('should return empty users list', async () => {
      const message = 'Network Error';
      axios.get.mockRejectedValueOnce(new Error(message));

      let response;
      act(async () => {
        response = await result.current.fetchData({ param: 'i', search: 'super' });
      });

      expect(axios.get).toHaveBeenCalledWith(
        `http://www.omdbapi.com/?i=super&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      expect(response).toBe(undefined);
    });
  });
});
