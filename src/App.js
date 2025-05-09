import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './Home';
import About from './About';

import Register from './Register';
import Login from './Login';
import StudentLayout from './layouts/StudentLayout';
import TeacherLayout from './layouts/TeacherLayout';
import AssignRole from './layouts/AssignRole';
import HRLayout from './layouts/HRLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />         
          <Route path="/register" element={<Register />} />          
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="assignrole" element={<AssignRole />} />
         
        </Route>

         {/* Student Layout */}
        <Route path="/student" element={<StudentLayout />}>
         
        </Route>
         {/* Teacher Layout */}
         <Route path="/teacher" element={<TeacherLayout />}>
         
         </Route>
         {/* HR Layout */}
         <Route path="/hr" element={<HRLayout />}>
         
         </Route>
      </Routes>
    </Router>
  );
}

export default App;
