import React from "react";

import ResponsiveImage from "../../../responsive-image/responsive-image.component";

const OverviewFeature = ({
	invers,
	imgSrc,
	imgAlt,
	imgKey,
	Title,
	Description,
}) => {
	return (
		<div className="row mt-rlv-5-mobile mt-lg-rlv-5-desktop">
			<div
				className={`col-12 col-lg-6 mb-rlv-1-mobile mb-lg-0 ${
					invers ? "order-lg-2" : ""
				}`}
			>
				<ResponsiveImage
					key={imgKey}
					w_desktop="100%"
					w_tablet="100%"
					w_mobile="100%"
					imgSrc={imgSrc}
					imgAlt={imgAlt}
				/>
			</div>
			<div
				className={`col-12 col-lg-6 text-center text-lg-left ${
					invers ? "order-lg-1" : ""
				}`}
			>
				<h2 className="font-weight-bold mb-rlv-C">{Title}</h2>
				<p className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop text-gray-4">
					{Description}
				</p>
				<div className="d-flex flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-center align-items-start">
					<a
						href="#requestdemo"
						className="btn btn-special-grad-1 btn-fix text-white font-weight-semibold mr-0 mr-sm-rlv-B mx-rlv-A mx-sm-0 mb-rlv-B"
						style={{ fontSize: "16px" }}
					>
						Request Demo
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285785875736"
						target="_blank"
						className="btn btn-outline-riliv-special-2 btn-fix font-weight-semibold mx-rlv-A mx-sm-0"
						style={{ fontSize: "16px" }}
					>
						Kontak Kami
					</a>
				</div>
			</div>
		</div>
	);
};

export default OverviewFeature;
