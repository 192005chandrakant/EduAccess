import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import TeacherPortal from './pages/TeacherPortal';
import CourseDetails from './pages/CourseDetails';
import Profile from './pages/Profile';
import  Settings  from './pages/Settings';
import AuthPage from './pages/AuthPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/teacher" element={<TeacherPortal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
