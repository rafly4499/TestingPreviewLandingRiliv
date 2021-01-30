import React from "react";

const KalkulatorCardComponent = ({Title, SubTitle, Description}) => {
	return (
		<div className="col-12 col-lg-4  mt-rlv-1-mobile mt-lg-rlv-1-desktop px-rlv-A px-lg-rlv-C h2 text-center text-lg-left">
			<p className="text-riliv-level-1 font-weight-bold h2" style={{marginBottom: "0px"}}>
				{Title}
			</p>
			<p className="text-riliv-level-1 h4 mb-rlv-C">{SubTitle}</p>
			<p className="text-gray-5 mb-0 paragraph-riliv">
				<strong>
					{Title} {SubTitle.toLowerCase()}
				</strong>{" "}
				{Description}
			</p>
		</div>
	);
};

export default KalkulatorCardComponent;
