import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import ExpPro from './screens/ExpPro';
import Formations from './screens/Formations';
import Skills from './screens/Skills';
import HomeNav from './components/HomeNav'


function App() {
  return (
    <div className="App">
      <Header />
      <main className='flex flex-row h-full'>
        <SideBar />
        <div className='text-white body-container'>
          <HomeNav />
          <Routes>
            <Route path='/' element={<Skills />} />
            <Route path='/Formations' element={<Formations />} />
            <Route path='/ExpPro' element={<ExpPro />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
