import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LazyMainPage = lazy(() => import("./pages/Main"));
const LazyGroupCreatePage = lazy(() => import("./pages/GroupCreate"));
const LazyGroupPage = lazy(() => import("./pages/Group"));
const LazyInvitesPage = lazy(() => import("./pages/Invites"));
const LazyAliasesPage = lazy(() => import("./pages/Aliases"));

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
    path: "/groups/create",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGroupCreatePage />
      </Suspense>
    ),
  },
  {
    path: "/groups/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGroupPage />
      </Suspense>
    ),
  },
  {
    path: "/invites",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInvitesPage />
      </Suspense>
    ),
  },
  {
    path: "/aliases",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAliasesPage />
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
