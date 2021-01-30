import { Fragment, useState } from "react";

import AccordionInfo from "../accordion-info/accordion-info";

export const TopicContainer = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<h2 className="h1 text-riliv-level-1 font-weight-bold">{title}</h2>
			{props.children}
		</Fragment>
	);
};

export const TopicSubContainer = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
				<h3 className="text-gray-5 font-weight-bold mb-0">{title}</h3>
				<div className="accordion" id={title.split(" ").join("")}>
					{props.children}
				</div>
			</div>
		</Fragment>
	);
};
