import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import ExpPro from './screens/ExpPro';
import Formations from './screens/Formations';
import Skills from './screens/Skills';
import HomeNav from './components/HomeNav'
import Resume from './screens/Resume'



function App() {
  return (
    <div className="App">
      <Header />
      <main className='flex flex-row h-full'>
        <SideBar />
        <div className='text-white body-container'>
          <HomeNav />
          <Routes>
            <Route path='/About-me/' element={<Skills />} />
            <Route path='/About-me/Formations' element={<Formations />} />
            <Route path='/About-me/ExpPro' element={<ExpPro />} />
            <Route path='/About-me/Resume' element={<Resume />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
