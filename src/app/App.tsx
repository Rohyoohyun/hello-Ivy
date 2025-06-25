import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Project from '@/pages/Project';
import Learning from '@/pages/Learning';
import ProjectPlus from '@/pages/ProjectPlus';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          {/* 기능추가하고 배포까지 완료하기 */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/add" element={<ProjectPlus />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;