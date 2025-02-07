import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Farhan from './component/Farhan';
import Amir from './component/Amir';
import PantsPage from './component/PantsPage'; // فرض کنید این صفحه مخصوص Pants است
import Favorites from './component/Favorites';
import All from './component/all';
import PlusSize from './component/PlusSize';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Farhan /><Amir /></>} />
        <Route path="/pants" element={<PantsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/all" element={<All />} />
        <Route path="/PlusSize" element={<PlusSize />} />

      </Routes>
    </Router>
  );
}

export default App;
