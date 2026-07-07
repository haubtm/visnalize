import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import AppsPage from './pages/AppsPage';
import UpdatesPage from './pages/UpdatesPage';

/** Reset scroll to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppsPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="*" element={<AppsPage />} />
      </Routes>
    </HashRouter>
  );
}
