import classes from "./feed.module.css";

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
				{data.map((item, index) => (
					<li key={index}>
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
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;
