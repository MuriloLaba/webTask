import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Router>
      <div className="flex-1 p-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
