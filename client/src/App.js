import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import News from './pages/News';
import Recycling from './pages/Recycling';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
      <Route path='/recycling' element={<Recycling />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
     
    </>
  );
}

export default App;
