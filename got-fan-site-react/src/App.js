import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Quotes from "./components/Quotes";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import './index.css';

function App() {
  return (
    <div>
      <Router>
      <div className="container mt-3">
        <header className="mb-3">
          <NavBar />
        </header>
        <main style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/houses' element={<Houses />}> </Route>
            <Route path='/quotes' element={<Quotes />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
            <Route path='/maps' element={<Maps />}></Route> */}
          </Routes>
        </main>
      </div>
    </Router>
    </div>
  );
}

export default App;
