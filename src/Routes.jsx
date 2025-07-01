import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Frontend/Pages/Home";
import About from "./Frontend/Pages/About";
import Data from "./Frontend/Pages/Data";
import Contact from "./Frontend/Pages/Contact";
import AdminPanel from "./Frontend/Pages/AdminPanel";
import AdminForm from "./Frontend/Pages/AdminForm";
import AdminDataList from "./Frontend/Pages/AdminDataList";
import { useAuth } from "./Context/AuthContext";
export default function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<Data />} />
      <Route path="/contact" element={<Contact />} />

      {/* 🔐 Admin Panel with Nested Routes */}
      <Route path="/adminpanel" element={<AdminPanel />}>
        <Route
          path="form"
          element={currentUser ? <AdminForm /> : <Navigate to="/adminpanel" />}
        />
        <Route
          path="data"
          element={
            currentUser ? <AdminDataList /> : <Navigate to="/adminpanel" />
          }
        />
        {/* Optional: default nested route */}
        <Route
          index
          element={
            currentUser ? <Navigate to="form" /> : <Navigate to="/adminpanel" />
          }
        />
      </Route>
    </Routes>
  );
}
