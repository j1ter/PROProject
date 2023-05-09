import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import News from './pages/News';
import Recycling from './pages/Recycling';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
      <Route path='/recycling' element={<Recycling />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
     
    </>
  );
}

export default App;
