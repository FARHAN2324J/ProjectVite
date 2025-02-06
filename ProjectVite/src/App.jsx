import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Farhan from './component/Farhan';
import Amir from './component/Amir';
import PantsPage from './component/PantsPage'; // فرض کنید این صفحه مخصوص Pants است
import Favorites from './component/Favorites';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Farhan /><Amir /></>} />
        <Route path="/pants" element={<PantsPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
