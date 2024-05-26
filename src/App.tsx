import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import TechnicalSkills from './screens/TechnicalSkills';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <main>
        <Routes>
          <Route path='/' element={<TechnicalSkills />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
