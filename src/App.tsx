import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, LogIn, SignUp } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
