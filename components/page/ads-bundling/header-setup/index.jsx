import React, { Fragment } from "react";

const AdsBundlingHeaderSetup = () => {
	return (
		<Fragment>
			<div style={{ maxWidth: "100%" }}>
				<img
					className="d-block d-lg-none"
					src="/img-ads/header.png"
					style={{ width: "100%" }}
				/>
			</div>
			<div
				className="row"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					width: "105vw",
					zIndex: "-1",
					height: "100%",
					backgroundColor: "#22cedc",
				}}
			>
				<div
					className="col-12 col-lg-6 px-0 d-none d-lg-block"
					style={{
						backgroundImage: "url('/img-ads/header.png')",
						backgroundPosition: "bottom right",
						backgroundSize: "cover",
					}}
				></div>
				<div className="col-12 col-lg-6 px-0">
					<div
						className="py-rlv-3-mobile py-lg-rlv-3-desktop"
						style={{ height: "100%", backgroundColor: "#22cedc" }}
					></div>
				</div>
			</div>
		</Fragment>
	);
};

export default AdsBundlingHeaderSetup;
