import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage, { loader as homeLoader } from "./pages/HomePage";
import ShortsPage from "./pages/ShortsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import Root from "./pages/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: homeLoader,
			},
			{
				path: "shorts",
				element: <ShortsPage />,
			},
			{
				path: "subsription",
				element: <SubscriptionPage />,
			},
			{ path: "library", element: <LibraryPage /> },
			{
				path: "history",
				element: <HistoryPage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={router}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</RouterProvider>
);
