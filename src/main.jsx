import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import createRouter from "./routes";
import { RouterProvider } from "react-router-dom";

const router = createRouter();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
