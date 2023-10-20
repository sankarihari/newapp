import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Front from './pages/Front';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
