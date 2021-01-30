import React, {Fragment} from "react";

export const ResponsiveText_H1 = (props) => {
	const {classDesktop, classMobile} = props;
	return (
		<Fragment>
			<h1 className={`d-none d-lg-inline-block mb-0 ${classDesktop}`}>{props.children}</h1>
			<h1 className={`d-inline-block d-lg-none mb-0 ${classMobile}`}>{props.children}</h1>
		</Fragment>
	);
};

export const ResponsiveText_H2 = (props) => {
	const {classDesktop, classMobile} = props;
	return (
		<Fragment>
			<h2 className={`d-none d-lg-inline-block mb-0 ${classDesktop}`}>{props.children}</h2>
			<h2 className={`d-inline-block d-lg-none mb-0 ${classMobile}`}>{props.children}</h2>
		</Fragment>
	);
};

export const ResponsiveText_P = (props) => {
	const {classDesktop, classMobile, extraStyle} = props;
	return (
		<Fragment>
			<p
				className={`d-none paragraph-riliv d-lg-inline-block mb-0 ${classDesktop}`}
				style={extraStyle}
			>
				{props.children}
			</p>
			<p className={`d-inline-block paragraph-riliv d-lg-none mb-0 ${classMobile}`} style={extraStyle}>
				{props.children}
			</p>
		</Fragment>
	);
};
