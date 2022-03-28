import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headline from './components/Headline';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Headline />} />
      </Routes>
    </Router>
  );
}

export default App;
