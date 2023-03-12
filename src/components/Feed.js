import classes from "./feed.module.css";
import { Link } from "react-router-dom";

//the content div that displays the videos thumbnail
const Feed = ({ data }) => {
	if (!data) {
		return (
			<>
				<p>data not available</p>
			</>
		);
	}
	return (
		<div className={classes.feed}>
			<ul className={classes.items}>
				{data.map(item => (
					<li key={item.id.videoId}>
						<Link to={`/video/${item.id.videoId}`} state={item}>
							<div className={classes.item}>
								<div className={classes.imgDiv}>
									<img
										className={classes.img}
										src={item.snippet.thumbnails.high.url}
										alt={item.snippet.title}
									/>
								</div>

								<div className={classes.title}>
									<p>{item.snippet.title}</p>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;
