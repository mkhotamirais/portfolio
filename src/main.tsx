import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Projects from "./Projects.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/portfolio">
      <Route index element={<App />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
