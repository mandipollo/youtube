import Feed from "../components/Feed";
import fetchData from "../utilities/fetchData";

import { useEffect, useState } from "react";
// searchInput value
import { useSelector } from "react-redux";

// homepage consisting of video thumbnail and video player
const HomePage = () => {
	const searchInput = useSelector(state => state.searchInput);
	const [data, setData] = useState();

	useEffect(() => {
		let timeoutId;
		const getData = async () => {
			const result = await fetchData({ searchInput });
			setData(result);
		};

		const getDelayedGetData = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(getData, 500);
		};
		getDelayedGetData();
		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchInput]);

	return <>{data && <Feed data={data.items} />}</>;
};

export default HomePage;
