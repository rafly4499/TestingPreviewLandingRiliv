import React from "react";

const BodyContainer = (props, { addClassFluid, extraClass }) => {
	return (
		<div className={`container px-lg-rlv-3 ${addClassFluid} ${extraClass} z5`}>
			<div className="px-lg-rlv-4-mobile">{props.children}</div>
		</div>
	);
};

export const BodySpecialContainer = (props, { addClassFluid }) => {
	const { extraStyle } = props;
	return (
		<div
			className={`container px-lg-rlv-3 ${addClassFluid}`}
			style={extraStyle}
		>
			{props.children}
		</div>
	);
};

export default BodyContainer;
