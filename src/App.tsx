import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/Dashboard";
import SearchBar from "./components/searchBar/SearchBar";
import styled from "styled-components";
import Bitcoin from "./pages/Bitcoin";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
      </Routes>
    </>
  );
}

export default App;
