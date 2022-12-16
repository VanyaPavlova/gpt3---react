import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
	<section className="gpt3__brand section__padding">
		<picture>
			<img src={google} alt="" />
		</picture>
		<picture>
			<img src={slack} alt="" />
		</picture>
		<picture>
			<img src={atlassian} alt="" />
		</picture>
		<picture>
			<img src={dropbox} alt="" />
		</picture>
		<picture>
			<img src={shopify} alt="" />
		</picture>
	</section>
);

export default Brand;
