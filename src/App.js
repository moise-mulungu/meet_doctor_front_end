import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/loginPage';

const App = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <Routes>
        <Route path="log-in" element={<LoginPage />} />
        </Routes>
    </Router>
  );
};

export default App;