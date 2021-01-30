import React, { Fragment } from "react";

const CentangHijauList = ({ additionalClass, Text, children }) => {
	return (
		<Fragment>
			<div className={`d-flex align-items-baseline ${additionalClass}`}>
				<img
					className="d-inline"
					src="/img-ads/centang_hijau.png"
					style={{
						height: "19px",
						marginRight: "12px",
					}}
				/>
				<p className="d-inline mb-0 h5">{children}</p>
			</div>
		</Fragment>
	);
};

export default CentangHijauList;
