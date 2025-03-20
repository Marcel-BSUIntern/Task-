import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"; // ✅ Import Dashboard
import Events from "./components/Events"; // ✅ Keep Events

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* ✅ Separate Dashboard */}
        <Route path="/events" element={<Events />} /> {/* ✅ Events Page */}
      </Routes>
    </Router>
  );
}

export default App;
