import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, LogIn, SignUp } from "./routes";
import { SignUpContextProvider } from "./context/SignUpContext";
import Feed from "./routes/Feed";

function App() {
  return (
    <SignUpContextProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </SignUpContextProvider>
  );
}

export default App;
