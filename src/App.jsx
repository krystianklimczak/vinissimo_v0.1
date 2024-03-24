import { Routes, Route } from 'react-router-dom';
import { TestPage } from './components/pages/TestPage.jsx';
import { Page404 } from './pages/Page404/Page404.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export { App };
