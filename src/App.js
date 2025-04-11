import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import Projects from "./Projects";
import ProjectCompleted from "./ProjectCompleted";
import AddProject from "./AddProject";
import Batch from "./Batch";
import AddBatch from "./AddBatch";
import Login from "./Login/Login";
import Register from "./Login/Register";

import { AuthProvider, useAuth } from './AuthContext';
import Header from './include/Header';
import Sidebar from './include/Sidebar';

// ✅ MainLayout for authenticated pages
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">{children}</div>
    </>
  );
}

// ✅ Protect routes
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* ✅ Redirect root to dashboard (only if logged in) */}
          <Route path="/" element={
            <PrivateRoute>
              <Navigate to="/dashboard" />
            </PrivateRoute>
          } />

          {/* ✅ Protected Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute><Dashboard /></PrivateRoute>
          } />
          <Route path="/project/projects" element={
            <PrivateRoute><Projects /></PrivateRoute>
          } />
          <Route path="/project/completed" element={
            <PrivateRoute><ProjectCompleted /></PrivateRoute>
          } />
          <Route path="/addProject" element={
            <PrivateRoute><AddProject /></PrivateRoute>
          } />
          <Route path="/editProject/:id" element={
            <PrivateRoute><AddProject /></PrivateRoute>
          } />
          <Route path="/batch/batches" element={
            <PrivateRoute><Batch /></PrivateRoute>
          } />
          <Route path="/addBatch" element={
            <PrivateRoute><AddBatch /></PrivateRoute>
          } />
          <Route path="/editBatch/:id" element={
            <PrivateRoute><AddBatch /></PrivateRoute>
          } />

          {/* ❌ Public Routes: no layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ❓ Optional: Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
