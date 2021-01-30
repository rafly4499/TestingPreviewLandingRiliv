import React from "react";

import ResponsiveImage from "../../../responsive-image/responsive-image.component";
import BodyContainer from "../../../body-container/body-container.component";

const ImpactDescription = (props) => {
	const {
		backgroundSrc,
		backgroundPos,
		imgKey,
		imgSrc,
		imgAlt,
		invers,
		title,
		titleColor,
		description,
		descriptionColor,
	} = props;
	return (
		<div
			className="container-fluid px-0"
			style={{
				backgroundImage: `url(${backgroundSrc})`,
				backgroundPosition: backgroundPos,
			}}
		>
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<div className="row">
						<div className={`col-12 col-lg-6 mb-rlv-1-mobile mb-lg-0 ${invers ? "order-lg-2" : ""}`}>
							<ResponsiveImage
								key={imgKey}
								w_desktop="460px"
								w_tablet="400px"
								w_mobile="320px"
								imgSrc={imgSrc}
								imgAlt={imgAlt}
							/>
						</div>
						<div className={`col-12 col-lg-6 ${invers ? "order-lg-1" : ""}`}>
							<h2
								className="font-weight-bold text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop"
								style={{color: titleColor}}
							>
								{title}
							</h2>
							<p
								className="h4 font-weight-semibold mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center text-lg-left"
								style={{color: descriptionColor}}
							>
								{description}
							</p>
							{props.children}
						</div>
					</div>
				</div>
			</BodyContainer>
		</div>
	);
};

export default ImpactDescription;
