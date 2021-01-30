import React from "react";

const MasalahSelesaiCard = ({imgSrc, imgAlt, Description}) => {
	return (
		<div className="col-12 col-lg-3 px-0 px-lg-rlv-B pb-rlv-1-mobile pb-lg-rlv-1-desktop">
			<div
				className="bg-white px-rlv-C py-rlv-1-mobile text-center h-100"
				style={{borderRadius: "10px", boxShadow: "0px 10px 20px #33333333"}}
			>
				<img className="mb-rlv-C" src={imgSrc} alt={imgAlt} style={{height: "100px", width: "100px"}} />
				<p className="paragraph-riliv font-weight-semibold">{Description}</p>
			</div>
		</div>
	);
};

export default MasalahSelesaiCard;
