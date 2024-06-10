import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={Router} />
    </Theme>
  </React.StrictMode>
);
