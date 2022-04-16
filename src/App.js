import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieContextProvider from './contexts/MovieContext';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <MovieContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MovieContextProvider>
    </div>
  );
}

export default App;
