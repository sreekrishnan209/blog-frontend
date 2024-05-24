import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import View from './Pages/View';
import PageNotFound from './Pages/PageNotFound';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <section>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
