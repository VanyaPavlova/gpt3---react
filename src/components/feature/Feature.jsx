import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => (
	<section className="gpt3__features-container__feature">
		<div className="gpt3__features-container__feature-title">
			<div />
			<h2>{title}</h2>
		</div>
		<div className="gpt3__features-container_feature-text">
			<p>{text}</p>
		</div>
	</section>
);

export default Feature;
