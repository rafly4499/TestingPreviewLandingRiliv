import React from "react";

export const MengapaTop = (props) => {
	return (
		<div
			className="px-lg-rlv-2-desktop d-flex"
			style={{height: props.mobile ? "160px" : "200px", borderBottom: "2px solid #eaeae9"}}
		>
			<div className="my-auto">{props.children}</div>
		</div>
	);
};

export const MengapaBody = (props) => {
	return (
		<div
			className="px-lg-rlv-2-desktop d-flex"
			style={{height: props.mobile ? "160px" : "200px", borderBottom: "2px solid #eaeae9"}}
		>
			<div className="my-auto">{props.children}</div>
		</div>
	);
};

export const MengapaBottom = (props) => {
	return (
		<div className="px-lg-rlv-2-desktop d-flex" style={{height: props.mobile ? "160px" : "200px"}}>
			<div className="my-auto">{props.children}</div>
		</div>
	);
};
