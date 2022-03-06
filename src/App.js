import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views/Index';
import Show from './views/Show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/beer/:id' element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
