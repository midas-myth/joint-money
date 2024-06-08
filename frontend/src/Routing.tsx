import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FullscreenLoader from "./components/FullscreenLoader";

const LazyMainPage = lazy(() => import("./pages/Main"));
const LazyGroupCreatePage = lazy(() => import("./pages/GroupCreate"));
const LazyGroupPage = lazy(() => import("./pages/Group"));
const LazyInvitesPage = lazy(() => import("./pages/Invites"));
const LazyAliasesPage = lazy(() => import("./pages/Aliases"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FullscreenLoader />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/groups/create",
    element: (
      <Suspense fallback={<FullscreenLoader />}>
        <LazyGroupCreatePage />
      </Suspense>
    ),
  },
  {
    path: "/groups/:id",
    element: (
      <Suspense fallback={<FullscreenLoader />}>
        <LazyGroupPage />
      </Suspense>
    ),
  },
  {
    path: "/invites",
    element: (
      <Suspense fallback={<FullscreenLoader />}>
        <LazyInvitesPage />
      </Suspense>
    ),
  },
  {
    path: "/aliases",
    element: (
      <Suspense fallback={<FullscreenLoader />}>
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
