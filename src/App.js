import Data from "./Components/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
