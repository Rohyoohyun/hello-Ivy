import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Project from '@/pages/Project';
import Learning from '@/pages/Learning';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;