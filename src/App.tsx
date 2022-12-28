import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
