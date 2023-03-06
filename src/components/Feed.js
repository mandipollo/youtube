import classes from "./feed.module.css";

const Feed = ({ data }) => {
	return (
		<div className={classes.feed}>
			<ul className={classes.items}>
				{data.items.map(item => (
					<li key={item.id.videoId}>
						<div className={classes.item}>
							<img
								className={classes.img}
								src={item.snippet.thumbnails.high.url}
								alt={item.snippet.title}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;
