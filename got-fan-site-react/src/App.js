import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Quotes from "./components/Quotes";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import './index.css';
import Error from "./components/Errors";

function App() {
  return (
    <div>
      <Router>
      <div>
        <header className="mb-3">
          <NavBar />
        </header>
        <main style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/quotes' element={<Quotes />}></Route>
            <Route path='/houses' element={<Houses />}> </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
    </div>
  );
}

export default App;
