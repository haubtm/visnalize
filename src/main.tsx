import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Self-hosted Iosevka (latin) — the design's monospace. Bundled for offline use.
import '@fontsource/iosevka/latin-400.css';
import '@fontsource/iosevka/latin-700.css';
import './styles/global.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
