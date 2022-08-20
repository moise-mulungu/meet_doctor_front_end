import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Pages/login/LoginPage';
import MainPage from './components/Pages/main/MainPage';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="login" element={<LoginPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
