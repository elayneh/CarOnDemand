import * as React from "react";
import { Router } from "react-router-dom";
import { ActionFunction, LazyRouteFunction, LoaderFunction, Router, RouterProvider, ShouldRevalidateFunction, createBrowserRouter } from "react-router-dom";
import SignUp from "../src/components/Common/Register";
import SignIn from "../src/components/Common/Login";
import Dashboard from "../src/components/Common/DashboardNav";
import NavBar from "../src/components/Common/NavBar";

interface RouteObject {
    path?: string;
    index?: boolean;
    children?: React.ReactNode;
    caseSensitive?: boolean;
    id?: string;
    loader?: LoaderFunction;
    action?: ActionFunction;
    element?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    errorElement?: React.ReactNode | null;
    ErrorBoundary?: React.ComponentType | null;
    handle?: RouteObject[];
    shouldRevalidate?: ShouldRevalidateFunction;
    // lazy?: LazyRouteFunction;
}

export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/user/register",
        element: <SignUp />,
      },
      {
        path: "/user/login",
        element: <SignIn />,
      },
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
