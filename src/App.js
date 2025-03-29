import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import WorkFlowListPage from './Pages/WorkFlowListPage/WorkFlowListPage';
import WorkFlowDesignPage from './Pages/WorkFlowDesignPage/WorkFlowDesign';

function App() {
  return (
    <Router>
    

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/workflowlist" element={<WorkFlowListPage />} />
      <Route path="/workflowdesign" element={<WorkFlowDesignPage />} />
    </Routes>
  </Router>
  );
}

export default App;
