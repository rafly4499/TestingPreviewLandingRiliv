import React from "react";

const SolusiTerbukti = ({Title, Description}) => {
	return (
		<div className="col-12 col-lg-4 px-lg-rlv-B mt-rlv-1-mobile mt-lg-rlv-1-desktop">
			<div className="px-rlv-1-mobile py-rlv-1-desktop h-100" style={{backgroundColor: "#ebfdff"}}>
				<p className="h1 font-weight-bold text-riliv-level-1 mb-rlv-B">{Title}</p>
				<p className="h5 text-gray-5 mb-0">{Description}</p>
			</div>
		</div>
	);
};

export default SolusiTerbukti;
