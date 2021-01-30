import React from "react";

const CardKenapaSection = ({
	imgSrc,
	imgAlt,
	imgWidth,
	textTitle,
	textDescription,
	customCol,
}) => {
	return (
		<div
			className={`${
				customCol ? customCol : "col-12 col-lg-3"
			} px-0 px-lg-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop`}
		>
			<div className="bg-white px-rlv-B py-rlv-1-mobile rounded-lg h-100">
				<div style={{ position: "absolute", left: "50%" }}>
					<img
						src={imgSrc}
						alt={imgAlt}
						style={{
							position: "relative",
							width: imgWidth,
							zIndex: "0",
							left: "-50%",
						}}
					/>
				</div>
				<div
					className=" text-center"
					style={{ zIndex: "2", position: "relative" }}
				>
					<h2 className="mb-rlv-B" style={{ fontWeight: "600" }}>
						{textTitle}
					</h2>
					<p className="paragraph-riliv mb-0">{textDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default CardKenapaSection;
