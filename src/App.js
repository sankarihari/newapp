import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from './components/History';
import Searchbar from './components/Searchbar';
import Callhistorypage from './pages/Callhistorypage';
import Notifications from './components/Notifications';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<History />} />
          <Route path='/search' element={<Searchbar />} />
          <Route path='/history' element={<Callhistorypage />} />
          <Route path='/not' element={<Notifications />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
