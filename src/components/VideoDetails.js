import React from "react";
import classes from "./videoDetails.module.css";
import { useLocation } from "react-router-dom";

const VideoDetails = () => {
	const { state } = useLocation();
	const timeStamp = state.snippet.publishTime;
	const date = new Date(timeStamp);
	const formattedDate = new Intl.DateTimeFormat(`en-us`, {
		month: `2-digit`,
		year: `numeric`,
	}).format(date);

	const [month, year] = formattedDate.split("/");
	const formattedDateMMYY = `${month}/${year}`;

	if (!state) {
		return (
			<div className={classes.videoDetails}>
				<h2>Videos not available</h2>
			</div>
		);
	}
	return (
		<div className={classes.videoDetails}>
			<div className={classes.video}>
				<iframe
					className={classes.videoPlayer}
					title={state.snippet.title}
					src={`https://www.youtube.com/embed/${state.id.videoId}`}
					allowFullScreen
				/>
			</div>
			<div className={classes.about}>
				<div className={classes.title}>
					<h2> {state.snippet.title}</h2>
				</div>
				<div className={classes.author}>
					<div>
						<p>{formattedDateMMYY}</p>
					</div>
					<div>
						<p>{state.snippet.channelTitle} </p>
					</div>
				</div>
				<div className={classes.description}>
					<p> {state.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
