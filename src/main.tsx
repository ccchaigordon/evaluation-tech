import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./components/MainPage";
import EventPage from "./components/EventPage";
import EventPage2 from "./components/EventPage2";
import Lon2024 from "./components/Events/lon-2024";
import Pixel2024 from "./components/Events/pixel-2024";
import Agm2024 from "./components/Events/agm-2024";
import Vhack2024 from "./components/Events/vhack-2024";
import Sukapps2024 from "./components/Events/sukapps-2024";
import Frosty2023 from "./components/Events/frosty-2023";
import Me22024 from "./components/Events/me2-2024";
import Vcsirf2023 from "./components/Events/vscirf-2023";
import CsB2023 from "./components/Events/csbersamamu-2023";
import NotFound from "./components/NotFound";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/events",
    element: <EventPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/events-2",
    element: <EventPage2 />,
    errorElement: <NotFound />,
  },
  {
    path: "lon-2024",
    element: <Lon2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "pixel-2024",
    element: <Pixel2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "agm-2024",
    element: <Agm2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "vhack-2024",
    element: <Vhack2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "sukapps-2024",
    element: <Sukapps2024 />,
    errorElement: <NotFound />,
  },
  {
    path: "frosty-2023",
    element: <Frosty2023 />,
    errorElement: <NotFound />,
  },
  {
    path: "me2-2024",
    element: <Me22024 />,
    errorElement: <NotFound />,
  },
  {
    path: "vcsirf-2023",
    element: <Vcsirf2023 />,
    errorElement: <NotFound />,
  },
  {
    path: "csbersamamu-2023",
    element: <CsB2023 />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
