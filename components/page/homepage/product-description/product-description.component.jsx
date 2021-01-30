import React from "react";

import ResponsiveImage from "../../../responsive-image/responsive-image.component";
import ProductSectionButton from "../product-section-button/product-section-button.component";

const ProductDescription = ({
	data: {
		imgAlt,
		imgSrc,
		logoImgSrc,
		logoImgAlt,
		logoImgWidth,
		DescriptionTop,
		DescriptionBottom,
		urlDetail,
		urlPlaystore,
		invers,
		forCompany,
		comingSoon,
	},
	productSectionKey,
	imgKey,
}) => {
	return (
		<div className="row">
			<div className={`col-12 col-lg-6 mb-rlv-2-mobile mb-lg-0 ${invers ? "order-lg-2" : ""}`}>
				<ResponsiveImage
					key={imgKey}
					w_desktop="460px"
					w_tablet="400px"
					w_mobile="95%"
					imgSrc={imgSrc}
					imgAlt={imgAlt}
				/>
			</div>
			<div className={`col-12 col-lg-6 ${invers ? "order-lg-1" : ""}`}>
				<img
					src={logoImgSrc}
					alt={logoImgAlt}
					className="mb-rlv-1-mobile mb-lg-rlv-1-desktop"
					style={{width: logoImgWidth}}
				/>
				<p className="h5 text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
					{DescriptionTop}
					<br /> <br />
					{DescriptionBottom}
				</p>
				<div className={` ${forCompany ? "" : "mb-rlv-2-mobile mb-lg-rlv-2-desktop"}`}>
					<ProductSectionButton
						key={productSectionKey}
						urlDetail={urlDetail}
						urlPlaystore={urlPlaystore}
						forCompany={forCompany}
						comingSoon={comingSoon}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
