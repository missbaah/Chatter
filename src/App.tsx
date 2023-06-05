import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, LogIn, SignUp } from "./routes";
import { SignUpContextProvider } from "./context/SignUpContext";

function App() {
  return (
    <SignUpContextProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </SignUpContextProvider>
  );
}

export default App;
