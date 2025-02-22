import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/home";
import LoginPage from "./Pages/Login/login";
import SignUpPage from "./Pages/SignUp/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signUp" element={<SignUpPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
