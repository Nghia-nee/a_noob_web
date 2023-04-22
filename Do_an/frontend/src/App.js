import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Naming from "./pages/Naming";
import Parenting from "./pages/Parenting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/naming" element={<Naming />}></Route>
        <Route path="/parenting" element={<Parenting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
