import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import ShortsPage from "./pages/ShortsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
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
	<Provider store={store}>
		<RouterProvider router={router}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</RouterProvider>
	</Provider>
);
