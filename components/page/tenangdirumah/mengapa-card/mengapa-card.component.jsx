import React from "react";

const MengapaCard = ({imgSrc, imgAlt, Title, Description}) => {
	return (
		<div className="col-12 col-md-4 col-lg-4 mt-rlv-1-mobile mt-lg-rlv-1-desktop px-lg-rlv-B">
			<div
				className="px-rlv-1-mobile px-lg-rlv-1-desktop pb-rlv-1-mobile pb-lg-rlv-1-desktop pt-rlv-C text-center h-100"
				style={{border: "1px solid #eaeae9", borderRadius: "10px"}}
			>
				<img
					src={imgSrc}
					alt={imgAlt}
					className="mb-rlv-B mx-auto"
					style={{width: "116px", height: "116px"}}
				/>
				<h4 className="mb-rlv-B text-gray-5 font-weight-semibold">{Title}</h4>
				<p className="mb-0 text-gray-4" style={{lineHeight: "28px"}}>
					{Description}
				</p>
			</div>
		</div>
	);
};

export default MengapaCard;
