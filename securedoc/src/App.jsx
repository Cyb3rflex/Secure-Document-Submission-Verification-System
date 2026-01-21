import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Onboarding from "./pages/Onboarding"; // placeholder
import UploadPage from "./pages/UploadPage";
import Lecturer from "./pages/Lecturer";

export default function App() {
  const location = useLocation();
   // This normally comes from AuthContext or API
  const user = {
    name: "Dr. Joshua Opaleke",
    role: "lecturer", // "student"
    isAuthenticated: true,
  };
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        {/* Protected */}
        <Route
          path="/upload"
          element={
            user.isAuthenticated ? (
              <UploadPage user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/lecturerhome" element={<Lecturer />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<Navigate to="/upload" />} />
      </Routes>
    </AnimatePresence>
  );
}
