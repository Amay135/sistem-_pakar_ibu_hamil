import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Tetap seperti ini
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Cukup hapus "ReactDOM." dari baris ini
const root = createRoot(document.getElementById("root"));

root.render(<App />);