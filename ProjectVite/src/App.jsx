import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Farhan from './component/Farhan';
import Amir from './component/Amir';
import PantsPage from './component/PantsPage';
import Favorites from './component/Favorites';
import All from './component/all';
import PlusSize from './component/PlusSize';
import NotFound from './notFound';
import Store from './component/store';
import { HeartProvider } from './component/HeartContext';
import Login from './component/Login';
import FAQs from './component/FaQs';

function App() {
  return (
    <HeartProvider> 
    <Router>
      <Routes>
        <Route path="/" element={<><Farhan /><Amir /></>} />
        <Route path="/all" element={<All />} />
        <Route path="/pants" element={<PantsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/PlusSize" element={<PlusSize />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  </HeartProvider>
    
  );
}

export default App;
