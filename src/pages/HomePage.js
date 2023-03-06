import Feed from "../components/Feed";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
	const data = useLoaderData();

	return <Feed data={data} />;
};

export default HomePage;

export const loader = async () => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "e2ebefbd78msh3ff8f0dafb70886p17aa22jsna8a99d5343f2",
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	const response = await fetch(
		"https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date",
		options
	);
	const data = await response.json();
	console.log(data);

	return data;
};
