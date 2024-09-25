import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import ProjectDescription from './pages/ProjectDescription';


function App() {
  return (
    <Router>
      <Header />
      <main className='bg-gray-900'>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Contacts />
            </>
          } />
          <Route path='/contacts' element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:title" element={<ProjectDescription />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
