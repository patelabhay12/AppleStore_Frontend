import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Error404 from './Components/Error404';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
