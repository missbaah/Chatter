import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, LogIn, SignUp } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/signup" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
