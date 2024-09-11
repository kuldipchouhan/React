import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Default import
//  import {Practice} from './Practice.jsx';  // Named import
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uncomment this if you want to use the App component */}
    <App />
    {/* <Practice /> */}
  </StrictMode>
);