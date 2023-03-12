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
		const getData = async () => {
			const result = await fetchData({ searchInput });
			setData(result);
		};
		getData();
	}, [data, searchInput]);
	console.log(data);

	return <>{data && <Feed data={data.items} />}</>;
};

export default HomePage;
