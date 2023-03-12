import React from "react";
import classes from "./videoDetails.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoDetails = () => {
	const { state } = useLocation();

	console.log(state);

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
			<div className={classes.description}>
				<h2>Title: {state.snippet.title}</h2>
				<p>Description: {state.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetails;
