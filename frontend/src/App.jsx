import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <div className="flex-1 p-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
