import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import WorkFlowListPage from './Pages/WorkFlowListPage/WorkFlowListPage';

function App() {
  return (
    <Router>
    

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/workflowlist" element={<WorkFlowListPage />} />
    </Routes>
  </Router>
  );
}

export default App;
