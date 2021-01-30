import React, { Fragment } from "react";

const ResponsiveImage = ({
	w_desktop,
	w_tablet,
	w_mobile,
	imgSrc,
	imgAlt,
	right,
	forceLeft,
}) => {
	return (
		<Fragment>
			<img
				src={imgSrc}
				alt={imgAlt}
				className="d-none d-xl-inline-block"
				style={{ maxWidth: w_desktop }}
			/>
			<div
				className={`${forceLeft ? "" : "text-center"} ${
					right ? "text-lg-right" : "text-lg-left"
				}`}
			>
				<img
					src={imgSrc}
					alt={imgAlt}
					className="d-none d-md-inline d-xl-none"
					style={{ maxWidth: w_tablet }}
				/>
				<img
					src={imgSrc}
					alt={imgAlt}
					className="d-inline d-md-none"
					style={{ maxWidth: w_mobile }}
				/>
			</div>
		</Fragment>
	);
};

export const CenteredResponsiveImage = ({
	w_desktop,
	w_tablet,
	w_mobile,
	imgSrc,
	imgAlt,
}) => {
	return (
		<Fragment>
			<img
				src={imgSrc}
				alt={imgAlt}
				className="d-none d-xl-inline-block"
				style={{ maxWidth: w_desktop }}
			/>
			<div className="text-center">
				<img
					src={imgSrc}
					alt={imgAlt}
					className="d-none d-md-inline d-xl-none"
					style={{ maxWidth: w_tablet }}
				/>
				<img
					src={imgSrc}
					alt={imgAlt}
					className="d-inline d-md-none"
					style={{ maxWidth: w_mobile }}
				/>
			</div>
		</Fragment>
	);
};

export default ResponsiveImage;
