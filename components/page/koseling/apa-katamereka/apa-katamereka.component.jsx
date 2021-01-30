import React from "react";

const KataMereka = ({imgSrc, imgAlt, title, reviewer, review, reviewer_job}) => {
	return (
		<div className="text-left d-lg-flex d-inline-block px-rlv-C px-lg-rlv-3-desktop rounded-lg bg-white p-rlv-1-mobile p-lg-rlv-1-desktop">
			<img
				src={imgSrc}
				alt={imgAlt}
				style={{height: "120px"}}
				className="d-lg-inline ml-lg-0 mr-lg-rlv-1-desktop mb-rlv-C mb-lg-0"
			/>
			<div className=" d-lg-inline">
				<div className="d-block">
					<p className="h4 d-inline-block text-gray-5 font-weight-semibold mb-rlv-B">{title}</p>
				</div>
				<div className="d-block">
					<p className="d-inline-block paragraph-riliv text-gray-5 mb-0" style={{lineHeight: "28px"}}>
						"{review}"
					</p>
				</div>
				<br />
				<div className="d-block">
					<p className="d-inline-block paragraph-riliv text-gray-5 mb-0">
						<strong className="font-weight-semibold">{reviewer}</strong>
						<br />
						{reviewer_job}
					</p>
				</div>
			</div>
		</div>
	);
};

export default KataMereka;
