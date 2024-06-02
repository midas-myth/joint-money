import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LazyMainPage = lazy(() => import("./pages/Main"));
const LazyGroupCreatePage = lazy(() => import("./pages/GroupCreate"));
const LazyGroupPage = lazy(() => import("./pages/Group"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/group/create",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGroupCreatePage />
      </Suspense>
    ),
  },
  {
    path: "/group/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGroupPage />
      </Suspense>
    ),
  },
]);

export default function Routing() {
  return (
    // react router dom basic router with main page
    <RouterProvider router={router} />
  );
}
