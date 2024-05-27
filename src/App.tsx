import './styles/App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Skills from './screens/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <main>
        <Routes>
          <Route path='/' element={<Skills />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
