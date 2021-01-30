import React from "react";

const ProductTesmoni = ({data: {imgSrc, imgAlt, reviewer, review}}) => {
	return (
		<div
			className="d-lg-flex d-inline-block py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-C px-lg-rlv-3-desktop rounded-lg"
			style={{backgroundColor: "#e6fafc"}}
		>
			<img
				src={imgSrc}
				alt={imgAlt}
				style={{height: "100px"}}
				className="d-lg-inline mr-rlv-C mb-3 mb-lg-0"
			/>
			<div className=" d-lg-inline">
				<div className="d-block">
					<p className="d-inline-block paragraph-riliv text-gray-5 font-weight-bold mb-3">{reviewer}</p>
				</div>
				<div className="d-block">
					<p className="d-inline-block paragraph-riliv text-gray-5 mb-0" style={{lineHeight: "31px"}}>
						<em>{review}</em>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductTesmoni;
