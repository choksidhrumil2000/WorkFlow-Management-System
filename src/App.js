import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import WorkFlowList from './Components/WorkFlowList/WorkFlowList';

function App() {
  return (
    <Router>
    {/* <nav>
      <Link to="/"></Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav> */}

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/workflowlist" element={<WorkFlowList />} />
    </Routes>
  </Router>
  );
}

export default App;
