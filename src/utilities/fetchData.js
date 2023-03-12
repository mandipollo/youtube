const fetchData = async ({ searchInput = `blackpink` }) => {
	const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchInput}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "e2ebefbd78msh3ff8f0dafb70886p17aa22jsna8a99d5343f2",
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	const response = await fetch(url, options);

	if (!response.ok) {
		throw new Error(`fetching failed!!`);
	}
	const data = await response.json();
	return data;
};

export default fetchData;
