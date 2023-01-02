import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/Dashboard";
import SearchBar from "./components/searchBar/SearchBar";
import Bitcoin from "./pages/Bitcoin";
import AllCryptos from "./pages/AllCryptos";
import Documents from "./pages/Documents";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/cryptomonnaies" element={<AllCryptos />} />
        <Route path="/doc" element={<Documents />} />
        <Route path="/recherche" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
