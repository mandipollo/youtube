import "./App.css";
import HomePage from "./pages/HomePage";
import ShortsPage from "./pages/ShortsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import LibraryPage from "./pages/LibraryPage";
import HistoryPage from "./pages/HistoryPage";
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

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
