import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./routes/error-page";
import { About } from "./routes/about";
import { Services } from "./routes/services";
import { WebDesign } from "./routes/web-design";
import { WebDev } from "./routes/web-dev";
import { Frontend } from "./routes/frontend";
import { Php } from "./routes/php";
import { NodeJs } from "./routes/node";
import { SEO } from "./routes/seo";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "web-design",
        element: <WebDesign />,
      },
      {
        path: "web-dev",
        element: <WebDev />,
      },
      {
        path: "frontend",
        element: <Frontend />,
      },
      {
        path: "node",
        element: <NodeJs />,
      },
      {
        path: "php",
        element: <Php />,
      },
      {
        path: "seo",
        element: <SEO />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
