import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./MainPage";
import EventPage from "./EventPage";
import EventPage2 from "./EventPage2";
import Lon2024 from "./Events/lon-2024";
import Pixel2024 from "./Events/pixel-2024";
import Agm2024 from "./Events/agm-2024";
import Vhack2024 from "./Events/vhack-2024";
import Sukapps2024 from "./Events/sukapps-2024";
import Frosty2023 from "./Events/frosty-2023";
import Me22024 from "./Events/me2-2024";
import Vcsirf2023 from "./Events/vscirf-2023";
import CsB2023 from "./Events/csbersamamu-2023";
import NotFound from "./NotFound";

import "../App.css";
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
