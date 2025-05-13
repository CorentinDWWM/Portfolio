import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ModeProvider from "./components/providers/ModeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModeProvider>
  </StrictMode>
);
