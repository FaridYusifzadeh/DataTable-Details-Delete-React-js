// routing
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";
import DeleteData from "./pages/DeleteData";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/deletedata/:id" element={<DeleteData />} />
      </Routes>
    </div>
  );
}

export default App;
