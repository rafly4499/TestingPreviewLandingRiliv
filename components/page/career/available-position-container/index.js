import React from "react";

const AvailablePositionContainer = ({
	children,
	Division,
	imgDivision,
	first,
}) => {
	return (
		<div className={`${first ? "" : "pt-rlv-3-mobile pt-lg-rlv-3-desktop"}`}>
			{/* Header Bisnis */}
			<div className="d-flex align-items-center mb-rlv-1-mobile ml-rlv-C ml-lg-0">
				<img
					src={`./img-career/${imgDivision}`}
					className="mr-rlv-C"
					style={{ height: "94px", width: "94px" }}
					alt="Riliv Kerja Tim Bisnis"
				/>
				<h4 className="h2 font-weight-bold">{Division}</h4>
			</div>
			{/* Header Bisnis End */}
			{/* Header Table */}
			<div className="d-none d-lg-flex">
				<div className="col ml-rlv-1-mobile px-0">
					<p className="h3 text-gray-3 font-weight-bold">Posisi</p>
				</div>
				<div className="col ml-rlv-1-mobile px-0">
					<p className="h3 text-gray-3 font-weight-bold">Tipe</p>
				</div>
			</div>
			{/* Header Table End */}
			{children}
		</div>
	);
};

export default AvailablePositionContainer;
